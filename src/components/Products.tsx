import { Button } from "@/components/ui/button";
import { products, getWhatsAppLink, type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
          loading="lazy"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {product.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {product.description}
        </p>
        <Button
          variant="outline"
          size="default"
          className="w-full"
          asChild
        >
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export const Products = () => {
  return (
    <section id="products" className="section bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-3">
            Our Collection
          </p>
          <h2 className="section-heading">Signature Flavors</h2>
          <div className="decorative-line mt-4 mb-6" />
          <p className="section-subheading">
            Each kulfi is slow-cooked to creamy perfection, made fresh daily with authentic ingredients
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
