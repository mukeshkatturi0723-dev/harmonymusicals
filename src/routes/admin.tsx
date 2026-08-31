import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, products, type ProductCategory } from "@/data/products";

export const Route = createFileRoute("/admin")({ component: AdminDashboard });

function AdminDashboard() {
  const [items, setItems] = useState(products.map((p) => ({ ...p })));
  const [selected, setSelected] = useState<string | null>(null);
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const visible = useMemo(() => category === "All" ? items : items.filter((p) => p.category === category), [items, category]);
  const lowStock = items.filter((p) => p.stock <= 3).length;
  const totalValue = items.reduce((sum, p) => sum + p.price * p.stock, 0);

  const update = (id: string, field: "price" | "stock", value: number) => setItems((current) => current.map((p) => p.id === id ? { ...p, [field]: Math.max(0, value) } : p));

  return <main className="min-h-screen bg-background px-5 py-12 md:px-8 md:py-20"><div className="mx-auto max-w-[1180px]">
    <div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Harmony Musicals</p><h1 className="mt-2 font-display text-4xl md:text-5xl">Admin dashboard</h1><p className="mt-3 text-sm text-muted-foreground">Manage catalogue pricing and inventory.</p></div><Link to="/instruments" className="text-sm underline">View storefront →</Link></div>
    <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4"><Stat label="Products" value={String(items.length)} /><Stat label="Low stock" value={String(lowStock)} /><Stat label="Units" value={String(items.reduce((s,p) => s + p.stock, 0))} /><Stat label="Stock value" value={`₹ ${totalValue.toLocaleString("en-IN")}`} /></div>
    <div className="mt-12 flex flex-wrap gap-2"><button onClick={() => setCategory("All")} className={`border px-4 py-2 text-sm ${category === "All" ? "bg-foreground text-primary-foreground" : ""}`}>All</button>{categories.map(c => <button key={c} onClick={() => setCategory(c)} className={`border px-4 py-2 text-sm ${category === c ? "bg-foreground text-primary-foreground" : ""}`}>{c}</button>)}</div>
    <div className="mt-6 overflow-x-auto border-y border-border"><table className="w-full min-w-[760px] text-left text-sm"><thead><tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground"><th className="px-3 py-4">Product</th><th className="px-3 py-4">Category</th><th className="px-3 py-4">Price</th><th className="px-3 py-4">Stock</th><th className="px-3 py-4">Status</th></tr></thead><tbody>{visible.map(p => <tr key={p.id} className="border-b border-border last:border-0"><td className="px-3 py-4"><div className="flex items-center gap-3"><img src={p.image} alt="" className="h-12 w-12 object-cover"/><div><p className="font-medium">{p.name}</p><p className="text-xs text-muted-foreground">{p.brand}</p></div></div></td><td className="px-3 py-4 text-muted-foreground">{p.category}</td><td className="px-3 py-4"><input type="number" value={selected === p.id ? p.price : p.price} onChange={e => { setSelected(p.id); update(p.id, "price", Number(e.target.value)); }} className="w-28 border border-border bg-background px-2 py-2" /></td><td className="px-3 py-4"><input type="number" min="0" value={p.stock} onChange={e => { setSelected(p.id); update(p.id, "stock", Number(e.target.value)); }} className="w-20 border border-border bg-background px-2 py-2" /></td><td className="px-3 py-4">{p.stock === 0 ? <span className="text-destructive">Out of stock</span> : p.stock <= 3 ? <span>Low stock</span> : <span className="text-muted-foreground">In stock</span>}</td></tr>)}</tbody></table></div>
    <p className="mt-5 text-xs text-muted-foreground">This first admin layer edits the live page state. Firebase persistence and authenticated admin access are the next production layer.</p>
  </div></main>;
}

function Stat({ label, value }: { label: string; value: string }) { return <div className="border border-border p-5"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-2 font-display text-2xl">{value}</p></div>; }
