import { Check } from "lucide-react";
import brandStoryImage from "@/assets/brand-story.jpg";

const features = [
  {
    title: "Traditional Recipes",
    description: "Passed down through generations, our recipes preserve the authentic taste of heritage kulfi.",
  },
  {
    title: "Premium Ingredients",
    description: "We source the finest pistachios, saffron, and spices from trusted suppliers worldwide.",
  },
  {
    title: "Slow-Cooked Perfection",
    description: "Each batch is slow-cooked for hours to achieve the rich, dense texture that defines true kulfi.",
  },
];

export const BrandStory = () => {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={brandStoryImage}
                alt="Traditional kulfi making process"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-up delay-200">
            <p className="text-primary font-medium tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              Crafting Tradition, <br />
              <span className="text-primary">One Kulfi at a Time</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Born from a passion for authentic flavors, Koolfe brings the rich heritage of traditional kulfi to Kuwait. Every batch is a tribute to the artisans who perfected this frozen delicacy centuries ago.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 animate-fade-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
