import { Button } from "@/components/ui/button";
import { brandInfo, getWhatsAppLink } from "@/data/products";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-slow"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm md:text-base animate-fade-up">
            {brandInfo.tagline}
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] text-balance animate-fade-up delay-100 drop-shadow-xl">
            Indulge in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent">
              Pure Tradition
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up delay-200">
            Handcrafted kulfi using centuries-old recipes. <br className="hidden md:block"/>
            Experience the authentic taste of royalty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up delay-300">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 rounded-full transition-all shadow-lg hover:shadow-accent/50"
              onClick={scrollToProducts}
            >
              Explore Flavors
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white text-lg px-8 py-6 rounded-full backdrop-blur-sm"
              asChild
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Order via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
