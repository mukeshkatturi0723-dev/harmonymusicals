import { useEffect, useState } from "react";
import { products, type Product } from "@/data/products";

export type CartItem = { product: Product; quantity: number };
const KEY = "harmony-musicals-cart";
const EVENT = "harmony-cart-updated";
type StoredItem = Pick<Product, "id" | "brand" | "name" | "price" | "image"> & { quantity: number };

export function getCart(): StoredItem[] { try { return JSON.parse(localStorage.getItem(KEY) || "[]") as StoredItem[]; } catch { return []; } }
function saveCart(items: StoredItem[]) { localStorage.setItem(KEY, JSON.stringify(items)); window.dispatchEvent(new Event(EVENT)); }
export function addToCart(product: Product, quantity = 1) { const items = getCart(); const existing = items.find(i => i.id === product.id); if (existing) existing.quantity += quantity; else items.push({ id: product.id, brand: product.brand, name: product.name, price: product.price, image: product.image, quantity }); saveCart(items); }
export function updateCartQuantity(id: string, quantity: number) { saveCart(getCart().map(i => i.id === id ? { ...i, quantity } : i).filter(i => i.quantity > 0)); }
export function removeFromCart(id: string) { saveCart(getCart().filter(i => i.id !== id)); }
export function clearCart() { saveCart([]); }
export function cartCount() { return getCart().reduce((s, i) => s + i.quantity, 0); }
export function useCart() {
  const [stored, setStored] = useState<StoredItem[]>([]);
  useEffect(() => { const sync = () => setStored(getCart()); sync(); window.addEventListener(EVENT, sync); return () => window.removeEventListener(EVENT, sync); }, []);
  const items = stored.map(item => ({ product: products.find(p => p.id === item.id) ?? ({ ...item, stock: 999, description: "", features: [], category: "Guitars & Basses" as const } as Product), quantity: item.quantity }));
  return { items, itemCount: stored.reduce((s, i) => s + i.quantity, 0), subtotal: stored.reduce((s, i) => s + i.price * i.quantity, 0), addToCart, removeFromCart, setQuantity: updateCartQuantity, clearCart };
}
export const cartEvent = EVENT;
