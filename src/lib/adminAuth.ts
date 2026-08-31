import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { auth, firebaseConfigured } from "@/lib/firebase";

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL as string | undefined;

export const adminAuthEnabled = firebaseConfigured && Boolean(auth) && Boolean(ADMIN_EMAIL);

export async function signInAdmin(email: string, password: string) {
  if (!auth || !firebaseConfigured) throw new Error("Firebase is not configured.");
  if (ADMIN_EMAIL && email.trim().toLowerCase() !== ADMIN_EMAIL.trim().toLowerCase()) {
    throw new Error("This account is not authorized as an admin.");
  }
  return signInWithEmailAndPassword(auth, email.trim(), password);
}

export function watchAdminAuth(callback: (user: User | null) => void) {
  if (!auth || !firebaseConfigured) return () => undefined;
  return onAuthStateChanged(auth, callback);
}

export function logoutAdmin() {
  if (!auth) return Promise.resolve();
  return signOut(auth);
}
