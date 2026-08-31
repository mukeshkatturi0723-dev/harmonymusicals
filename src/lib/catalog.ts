import { products as seedProducts, type Product } from "@/data/products";

const STORAGE_KEY = "harmony-musicals-products";
const EVENT = "harmony-products-updated";

function read(): Product[] {
  if (typeof window === "undefined") return seedProducts;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Product[]) : seedProducts;
  } catch {
    return seedProducts;
  }
}

export function getProducts(): Product[] {
  return read();
}

export function saveProducts(products: Product[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  window.dispatchEvent(new Event(EVENT));
}

export function updateProduct(id: string, patch: Partial<Pick<Product, "price" | "stock">>) {
  saveProducts(read().map((product) => product.id === id ? { ...product, ...patch } : product));
}

export function resetCatalog() {
  saveProducts(seedProducts);
}

export const catalogEvent = EVENT;
