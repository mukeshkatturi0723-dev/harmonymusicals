export type ProductCategory = "Guitars & Basses" | "Keyboards & Pianos" | "Drums & Percussion" | "Indian Classical";

export type Product = {
  id: string;
  brand: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  description: string;
  features: string[];
  image: string;
};

import pAcoustic from "@/assets/p-acoustic.jpg";
import pPiano from "@/assets/p-piano.jpg";
import pViolin from "@/assets/p-violin.jpg";
import pTabla from "@/assets/p-tabla.jpg";

export const products: Product[] = [
  {
    id: "yamaha-f310",
    brand: "Yamaha",
    name: "F310 Dreadnought Acoustic",
    category: "Guitars & Basses",
    price: 9990,
    stock: 8,
    description: "A dependable acoustic guitar for students, practice and everyday playing.",
    features: ["Dreadnought body", "Steel strings", "Comfortable neck", "Great for beginners"],
    image: pAcoustic,
  },
  {
    id: "casio-cdp-s110",
    brand: "Casio",
    name: "CDP-S110 Digital Piano, 88 keys",
    category: "Keyboards & Pianos",
    price: 38500,
    stock: 5,
    description: "A compact 88-key digital piano suited to learning, practice and performance.",
    features: ["88 full-size keys", "Portable design", "Weighted action", "Multiple tones"],
    image: pPiano,
  },
  {
    id: "granada-violin",
    brand: "Granada",
    name: "4/4 Violin Outfit with bow & case",
    category: "Indian Classical",
    price: 12400,
    stock: 2,
    description: "A complete full-size violin outfit supplied with bow and protective case.",
    features: ["4/4 size", "Bow included", "Protective case", "Student friendly"],
    image: pViolin,
  },
  {
    id: "mukta-tabla",
    brand: "Mukta",
    name: "Sheesham Tabla Pair, tuned",
    category: "Indian Classical",
    price: 15800,
    stock: 3,
    description: "A tuned sheesham tabla pair for practice, lessons and stage use.",
    features: ["Sheesham wood", "Tuned pair", "Suitable for lessons", "Traditional construction"],
    image: pTabla,
  },
];

export const categories: ProductCategory[] = [
  "Guitars & Basses",
  "Keyboards & Pianos",
  "Drums & Percussion",
  "Indian Classical",
];
