// =====================================================
// KOOLFE PRODUCT DATA
// Edit this array to update products on the website
// =====================================================

import kulfiPistachio from "@/assets/kulfi-pistachio.png";
import kulfiMango from "@/assets/kulfi-mango.png";
import kulfiSaffron from "@/assets/kulfi-saffron.png";
import kulfiRose from "@/assets/kulfi-rose.png";
import kulfiCardamom from "@/assets/kulfi-cardamom.png";
import kulfiAlmond from "@/assets/kulfi-almond.png";
import kulfiCoconut from "@/assets/kulfi-coconut.png";
import kulfiMalai from "@/assets/kulfi-malai.png";
import kulfiChikkoo from "@/assets/kulfi-chikkoo.jpg";
import kulfiDates from "@/assets/kulfi-dates.png";
import kulfiFamilyPack from "@/assets/kulfi-family-pack.jpg";

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
    id: "kesar-malai",
    name: "Kesar Malai Kulfi",
    description: "Creamy malai kulfi enriched with saffron strands, delivering a royal, aromatic flavor and rich traditional taste.",
    price: "0.200 KD",
    image: kulfiSaffron,
  },
  {
    id: "pistachio",
    name: "Pistachio Kulfi",
    description: "Creamy kulfi made with premium pistachios, offering a rich, nutty flavor and authentic traditional taste.",
    price: "0.200 KD",
    image: kulfiPistachio,
  },
  {
    id: "mango",
    name: "Mango Kulfi",
    description: "Smooth, creamy kulfi infused with real mango pulp for a rich, tropical flavor and classic Indian sweetness.",
    price: "0.200 KD",
    image: kulfiMango,
  },
  {
    id: "chikkoo",
    name: "Chikkoo Kulfi",
    description: "Smooth and creamy kulfi made with ripe chikoo, offering a naturally sweet, caramel-like flavor.",
    price: "0.200 KD",
    image: kulfiChikkoo,
  },
  {
    id: "matka",
    name: "Matka Kulfi",
    description: "Traditional kulfi served in an earthen pot, offering an authentic flavor and natural earthy aroma that enhances every creamy scoop.",
    price: "0.200 KD",
    image: kulfiMalai,
  },
  {
    id: "coconut",
    name: "Tender Coconut Kulfi",
    description: "Light, refreshing, and irresistibly creamy—crafted with real tender coconut for a tropical kulfi that melts soft and finishes silky.",
    price: "0.200 KD",
    image: kulfiCoconut,
  },
  {
    id: "rose-almond",
    name: "Rose Almond Kulfi",
    description: "Fragrant rose-infused kulfi sprinkled with crunchy almonds, combining floral notes with a rich, nutty texture for a truly elegant flavor.",
    price: "0.200 KD",
    image: kulfiRose,
  },
  {
    id: "dates",
    name: "Dates Kulfi",
    description: "A wholesome and rich kulfi made with pure dates, bringing natural sweetness and a hint of caramel warmth in every bite.",
    price: "0.200 KD",
    image: kulfiDates,
  },
  {
    id: "family-pack",
    name: "Family Pack",
    description: "Rich, creamy traditional kulfi in a convenient family-size tub, ideal for sharing and bulk serving.",
    price: "1.000 KD",
    image: kulfiFamilyPack,
  },
];

// =====================================================
// CONTACT & BRAND INFO
// Edit these values to update contact information
// =====================================================
export const brandInfo = {
  name: "Koolfe",
  tagline: "Authentic Kulfi",
  
  // REPLACE WITH YOUR WHATSAPP NUMBER (include country code, no + or spaces)
  whatsappNumber: "96556571366",
  
  // Contact details
  phone: "+965 5657 1366",
  email: "sales@koolfe.com",
  instagram: "@koolfe.kw",
  
  // Business hours
  hours: {
    weekdays: "10:00 AM - 6:00 PM (Closed on Friday)",
    weekends: "10:00 AM - 6:00 PM (Closed on Friday)",
  },
  
  // Location (for Google Maps embed)
  location: {
    name: "Street 25, West Abu Fatira, Kuwait",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.8!2d48.0833!3d29.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf05a8d5555555%3A0x1234567890abcdef!2sWest%20Abu%20Fatira%2C%20Kuwait!5e0!3m2!1sen!2skw!4v1704326400000!5m2!1sen!2skw",
  },
  
  // Menu PDF URL
  menuPdfUrl: "/koolfe_menu2.pdf",
};

// Generate WhatsApp link with prefilled message
export const getWhatsAppLink = (productName?: string) => {
  const baseMessage = productName
    ? `Hi! I'd like to order ${productName} from Koolfe.`
    : "Hi! I'd like to place an order from Koolfe.";
  
  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${brandInfo.whatsappNumber}?text=${encodedMessage}`;
};
