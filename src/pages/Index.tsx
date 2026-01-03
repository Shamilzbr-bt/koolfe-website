import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { BrandStory } from "@/components/BrandStory";
import { Menu } from "@/components/Menu";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <BrandStory />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
