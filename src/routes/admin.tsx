import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { categories, type Product, type ProductCategory } from "@/data/products";
import { catalogEvent, getProducts, updateProduct, resetCatalog } from "@/lib/catalog";
import { adminAuthEnabled, logoutAdmin, watchAdminAuth } from "@/lib/adminAuth";

export const Route = createFileRoute("/admin")({ component: AdminDashboard });

function AdminDashboard() {
  const navigate = useNavigate();
  const [userReady, setUserReady] = useState(!adminAuthEnabled);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [items, setItems] = useState<Product[]>(getProducts);
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => watchAdminAuth((user) => {
    setUserReady(true);
    if (!user) {
      navigate({ to: "/admin-login" });
      return;
    }
    setUserEmail(user.email);
  }), [navigate]);

  useEffect(() => {
    const refresh = () => setItems(getProducts());
    window.addEventListener(catalogEvent, refresh);
    return () => window.removeEventListener(catalogEvent, refresh);
  }, []);

  const visible = useMemo(() => category === "All" ? items : items.filter((p) => p.category === category), [items, category]);
  const lowStock = items.filter((p) => p.stock <= 3).length;
  const units = items.reduce((sum, p) => sum + p.stock, 0);
  const totalValue = items.reduce((sum, p) => sum + p.price * p.stock, 0);

  const change = (id: string, field: "price" | "stock", value: number) => {
    const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
    updateProduct(id, { [field]: safeValue });
    setItems(getProducts());
    setSaved(id);
    window.setTimeout(() => setSaved(null), 1200);
  };

  if (!userReady) return <main className="flex min-h-screen items-center justify-center"><p className="text-sm text-muted-foreground">Checking admin access…</p></main>;

  return <main className="min-h-screen bg-background px-5 py-12 md:px-8 md:py-20"><div className="mx-auto max-w-[1180px]">
    <div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Harmony Musicals</p><h1 className="mt-2 font-display text-4xl md:text-5xl">Admin dashboard</h1><p className="mt-3 text-sm text-muted-foreground">Manage catalogue pricing and inventory.</p>{userEmail && <p className="mt-2 text-xs text-muted-foreground">Signed in as {userEmail}</p>}</div><div className="flex flex-wrap gap-4"><button onClick={() => logoutAdmin()} className="text-sm underline">Sign out</button><button onClick={() => { resetCatalog(); setItems(getProducts()); }} className="text-sm text-muted-foreground underline">Reset demo data</button><Link to="/instruments" className="text-sm underline">View storefront →</Link></div></div>
    <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4"><Stat label="Products" value={String(items.length)} /><Stat label="Low stock" value={String(lowStock)} /><Stat label="Units" value={String(units)} /><Stat label="Stock value" value={`₹ ${totalValue.toLocaleString("en-IN")}`} /></div>
    <div className="mt-12 flex flex-wrap gap-2"><button onClick={() => setCategory("All")} className={`border px-4 py-2 text-sm ${category === "All" ? "bg-foreground text-primary-foreground" : ""}`}>All</button>{categories.map(c => <button key={c} onClick={() => setCategory(c)} className={`border px-4 py-2 text-sm ${category === c ? "bg-foreground text-primary-foreground" : ""}`}>{c}</button>)}</div>
    <div className="mt-6 overflow-x-auto border-y border-border"><table className="w-full min-w-[820px] text-left text-sm"><thead><tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground"><th className="px-3 py-4">Product</th><th className="px-3 py-4">Category</th><th className="px-3 py-4">Price</th><th className="px-3 py-4">Stock</th><th className="px-3 py-4">Status</th></tr></thead><tbody>{visible.map(p => <tr key={p.id} className="border-b border-border last:border-0"><td className="px-3 py-4"><div className="flex items-center gap-3"><img src={p.image} alt="" className="h-12 w-12 object-cover"/><div><p className="font-medium">{p.name}</p><p className="text-xs text-muted-foreground">{p.brand}</p></div></div></td><td className="px-3 py-4 text-muted-foreground">{p.category}</td><td className="px-3 py-4"><input type="number" min="0" value={p.price} onChange={e => change(p.id, "price", Number(e.target.value))} className="w-28 border border-border bg-background px-2 py-2" />{saved === p.id && <span className="ml-2 text-xs text-muted-foreground">Saved</span>}</td><td className="px-3 py-4"><input type="number" min="0" value={p.stock} onChange={e => change(p.id, "stock", Number(e.target.value))} className="w-20 border border-border bg-background px-2 py-2" /></td><td className="px-3 py-4">{p.stock === 0 ? <span className="text-destructive">Out of stock</span> : p.stock <= 3 ? <span>Low stock</span> : <span className="text-muted-foreground">In stock</span>}</td></tr>)}</tbody></table></div>
    <div className="mt-6 border border-border bg-sand/30 p-5 text-sm"><p className="font-medium">Authentication</p><p className="mt-1 text-muted-foreground">Admin access is protected by Firebase Authentication when Firebase is configured. Product edits remain demo-local until Firestore persistence is enabled.</p></div>
  </div></main>;
}

function Stat({ label, value }: { label: string; value: string }) { return <div className="border border-border p-5"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-2 font-display text-2xl">{value}</p></div>; }
