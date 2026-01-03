import { Button } from "@/components/ui/button";
import { brandInfo, getWhatsAppLink } from "@/data/products";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground">
        <div className="max-w-3xl mx-auto">
          {/* Tagline */}
          <p className="text-lg md:text-xl font-medium tracking-widest uppercase mb-4 opacity-90 animate-fade-up">
            {brandInfo.tagline}
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
            Indulge in <br />
            <span className="text-primary">Pure Tradition</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-xl mx-auto animate-fade-up delay-200">
            Our kulfi is crafted using centuries-old traditional recipes, made from pure, hand-picked ingredients and perfected techniques. Freshly prepared with care, it brings you the authentic taste of timeless indulgence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToProducts}
            >
              View Products
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              asChild
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
