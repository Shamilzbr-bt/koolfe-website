import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandInfo, getWhatsAppLink } from "@/data/products";
import logo from "@/assets/koolfe-logo.jpg";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Our Collection" },
  { href: "#about", label: "Story" },
  { href: "#contact", label: "Visit Us" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "glass py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="relative z-50 flex items-center gap-3 group">
            <img 
              src={logo} 
              alt={brandInfo.name} 
              className="h-10 w-auto rounded-md shadow-md transition-transform group-hover:scale-105" 
            />
            <span className={`font-display font-bold text-2xl tracking-wide transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
              {brandInfo.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-accent relative group ${
                  isScrolled ? 'text-primary' : 'text-white/90'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              className="rounded-full bg-accent hover:bg-accent/90 text-primary font-semibold px-6"
              asChild
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-4xl text-primary font-bold hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
