import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { products, type Product } from "@/data/products";

const PRODUCTS_COLLECTION = "products";

export async function getFirestoreProducts(): Promise<Product[]> {
  if (!db) return products;
  const snapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
  if (snapshot.empty) return products;
  return snapshot.docs.map((item) => item.data() as Product);
}

export async function seedFirestoreProducts(): Promise<void> {
  if (!db) throw new Error("Firebase is not configured.");
  await Promise.all(products.map((product) => setDoc(doc(db, PRODUCTS_COLLECTION, product.id), product, { merge: true })));
}

export async function updateFirestoreProduct(id: string, changes: Partial<Pick<Product, "price" | "stock">>): Promise<void> {
  if (!db) throw new Error("Firebase is not configured.");
  await updateDoc(doc(db, PRODUCTS_COLLECTION, id), changes);
}
