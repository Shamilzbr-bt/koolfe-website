import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { BrandStory } from "@/components/BrandStory";
import { Menu } from "@/components/Menu";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Products />
        <BrandStory />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
