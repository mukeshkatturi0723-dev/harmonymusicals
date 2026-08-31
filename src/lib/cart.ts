import type { Product } from "@/data/products";

export type CartItem = Pick<Product, "id" | "brand" | "name" | "price" | "image"> & { quantity: number };

const KEY = "harmony-musicals-cart";
const EVENT = "harmony-cart-updated";

export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]") as CartItem[];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(EVENT));
}

export function addToCart(product: Product, quantity = 1) {
  const items = getCart();
  const existing = items.find((item) => item.id === product.id);
  if (existing) existing.quantity += quantity;
  else items.push({ id: product.id, brand: product.brand, name: product.name, price: product.price, image: product.image, quantity });
  saveCart(items);
}

export function updateCartQuantity(id: string, quantity: number) {
  const items = getCart().map((item) => item.id === id ? { ...item, quantity } : item).filter((item) => item.quantity > 0);
  saveCart(items);
}

export function removeFromCart(id: string) {
  saveCart(getCart().filter((item) => item.id !== id));
}

export function clearCart() {
  saveCart([]);
}

export function cartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

export const cartEvent = EVENT;
