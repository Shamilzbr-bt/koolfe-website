import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandInfo, getWhatsAppLink } from "@/data/products";
import logo from "@/assets/koolfe-logo.jpg";
const navLinks = [{
  href: "#home",
  label: "Home"
}, {
  href: "#products",
  label: "Products"
}, {
  href: "#about",
  label: "About"
}, {
  href: "#contact",
  label: "Contact"
}];
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img alt={brandInfo.name} className="h-12 w-auto object-contain rounded-lg" src="/lovable-uploads/3a8ab336-04bc-4732-b572-62fe8062df0f.png" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
                  aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>)}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="whatsapp" size="default" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div id="mobile-menu" className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`nav-link block w-full text-left py-2 ${activeSection === link.href.slice(1) ? "active" : ""}`}
                    aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                </li>)}
              <li className="pt-2">
                <Button variant="whatsapp" size="default" className="w-full" asChild>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Order on WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </div>}
      </div>
    </header>;
};