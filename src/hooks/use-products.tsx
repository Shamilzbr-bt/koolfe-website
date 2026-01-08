import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { products as localProducts, type Product } from "@/data/products";

// Helper to normalize data from Supabase to match the local Product interface
const normalizeProduct = (dbProduct: any): Product => {
  // Try to find a matching local product to use its image if the DB one is missing
  const localMatch = localProducts.find(
    (p) => p.name.toLowerCase() === dbProduct.name.toLowerCase()
  );

  return {
    id: dbProduct.id,
    name: dbProduct.name,
    description: dbProduct.description || "",
    price: dbProduct.price || "0.000 KD",
    // Use DB image_url if available, otherwise fallback to local image, or placeholder
    image: dbProduct.image_url || localMatch?.image || "/placeholder.svg",
  };
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase.from("products").select("*");

        if (error) {
          console.error("Error fetching products:", error);
          throw error;
        }

        // If DB is empty, fallback to local data
        if (!data || data.length === 0) {
          console.log("No products found in DB, using local fallback.");
          return localProducts;
        }

        return data.map(normalizeProduct);
      } catch (error) {
        console.error("Failed to fetch products, using local fallback:", error);
        // Fallback to local data on error (e.g., connection issues, table missing)
        return localProducts;
      }
    },
    // Add initial data to avoid loading state if we want instant render
    // initialData: localProducts,
  });
};
