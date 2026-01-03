// =====================================================
// KOOLFE PRODUCT DATA
// Edit this array to update products on the website
// =====================================================

import kulfiPistachio from "@/assets/kulfi-pistachio.jpg";
import kulfiMango from "@/assets/kulfi-mango.jpg";
import kulfiSaffron from "@/assets/kulfi-saffron.jpg";
import kulfiRose from "@/assets/kulfi-rose.jpg";
import kulfiCardamom from "@/assets/kulfi-cardamom.jpg";
import kulfiAlmond from "@/assets/kulfi-almond.jpg";
import kulfiChocolate from "@/assets/kulfi-chocolate.jpg";
import kulfiMalai from "@/assets/kulfi-malai.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

// =====================================================
// EDIT PRODUCTS HERE
// =====================================================
export const products: Product[] = [
  {
    id: "pistachio",
    name: "Pistachio Kulfi",
    description: "Rich, creamy kulfi with premium Iranian pistachios",
    price: "2.500 KD",
    image: kulfiPistachio,
  },
  {
    id: "mango",
    name: "Alphonso Mango",
    description: "Sweet Alphonso mangoes blended into creamy perfection",
    price: "2.500 KD",
    image: kulfiMango,
  },
  {
    id: "saffron",
    name: "Kesar Saffron",
    description: "Infused with premium Kashmiri saffron strands",
    price: "3.000 KD",
    image: kulfiSaffron,
  },
  {
    id: "rose",
    name: "Rose Petal",
    description: "Delicate rose essence with dried rose petals",
    price: "2.750 KD",
    image: kulfiRose,
  },
  {
    id: "cardamom",
    name: "Elaichi Cardamom",
    description: "Aromatic green cardamom in silky kulfi",
    price: "2.500 KD",
    image: kulfiCardamom,
  },
  {
    id: "almond",
    name: "Badam Almond",
    description: "Loaded with crunchy California almonds",
    price: "2.750 KD",
    image: kulfiAlmond,
  },
  {
    id: "chocolate",
    name: "Belgian Chocolate",
    description: "Rich dark Belgian chocolate fusion",
    price: "3.000 KD",
    image: kulfiChocolate,
  },
  {
    id: "malai",
    name: "Classic Malai",
    description: "Traditional creamy kulfi with silver leaf",
    price: "2.250 KD",
    image: kulfiMalai,
  },
];

// =====================================================
// CONTACT & BRAND INFO
// Edit these values to update contact information
// =====================================================
export const brandInfo = {
  name: "Koolfe",
  tagline: "Premium Artisan Kulfi",
  
  // REPLACE WITH YOUR WHATSAPP NUMBER (include country code, no + or spaces)
  whatsappNumber: "96512345678",
  
  // Contact details
  phone: "+965 1234 5678",
  email: "hello@koolfe.com",
  instagram: "@koolfe.kw",
  
  // Business hours
  hours: {
    weekdays: "10:00 AM - 10:00 PM",
    weekends: "12:00 PM - 11:00 PM",
  },
  
  // Location (for Google Maps embed)
  location: {
    name: "Kuwait City, Kuwait",
    // REPLACE with actual Google Maps embed URL
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111426.51949714879!2d47.91709!3d29.31166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c8f9d6c8c9d%3A0x3f3b9e8c8d8e8f8f!2sKuwait%20City!5e0!3m2!1sen!2skw!4v1234567890",
  },
  
  // Menu PDF URL
  menuPdfUrl: "/menu.pdf",
};

// Generate WhatsApp link with prefilled message
export const getWhatsAppLink = (productName?: string) => {
  const baseMessage = productName
    ? `Hi! I'd like to order ${productName} from Koolfe.`
    : "Hi! I'd like to place an order from Koolfe.";
  
  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${brandInfo.whatsappNumber}?text=${encodedMessage}`;
};
