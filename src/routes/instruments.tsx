import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { categories, products, type ProductCategory } from "@/data/products";

export const Route = createFileRoute("/instruments")({ component: Instruments });

function Instruments() {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery = !q || `${product.brand} ${product.name} ${product.category}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-sand/40 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow">Harmony Musicals</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight md:text-6xl">Instruments worth playing.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Explore our instrument collection by category, search by brand or model, and open any product for its full details.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCategory("All")} className={`border px-4 py-2 text-sm ${category === "All" ? "bg-foreground text-primary-foreground" : "border-border"}`}>All</button>
            {categories.map((item) => (
              <button key={item} onClick={() => setCategory(item)} className={`border px-4 py-2 text-sm ${category === item ? "bg-foreground text-primary-foreground" : "border-border"}`}>{item}</button>
            ))}
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search instruments..." className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground md:max-w-xs" />
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{filtered.length} instrument{filtered.length === 1 ? "" : "s"} found</p>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {filtered.map((product, index) => (
            <Reveal key={product.id} delay={index * 50}>
              <article className="group">
                <Link to="/instruments/$productId" params={{ productId: product.id }} className="block">
                  <div className="overflow-hidden border border-border bg-card">
                    <img src={product.image} alt={`${product.brand} ${product.name}`} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-4 text-xs tracking-wide text-muted-foreground">{product.brand}</p>
                  <h2 className="mt-1 text-sm font-medium leading-snug">{product.name}</h2>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span>₹ {product.price.toLocaleString("en-IN")}</span>
                    <span className={`text-xs ${product.stock > 0 ? "text-muted-foreground" : "text-destructive"}`}>{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</span>
                  </div>
                </Link>
                <div className="mt-3 flex gap-2">
                  <Link to="/instruments/$productId" params={{ productId: product.id }} className="border border-foreground px-3 py-2 text-xs">View product</Link>
                  <button disabled={product.stock === 0} className="bg-foreground px-3 py-2 text-xs text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40">Add to cart</button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
