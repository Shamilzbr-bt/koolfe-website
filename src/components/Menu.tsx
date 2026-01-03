import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandInfo } from "@/data/products";

export const Menu = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-3">
            Full Menu
          </p>
          <h2 className="section-heading mb-4">
            Explore Our Complete Selection
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Download our full menu to see all available flavors, pack sizes, and catering options.
          </p>
          
          <Button
            variant="default"
            size="lg"
            className="group"
            asChild
          >
            <a
              href={brandInfo.menuPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FileDown className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-1" />
              Download Menu (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
