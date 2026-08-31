import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/data/products";
import { addToCart } from "@/lib/cart";

export const Route = createFileRoute("/instruments/$productId")({ component: ProductDetails });

function ProductDetails() {
  const { productId } = Route.useParams();
  const navigate = useNavigate();
  const product = products.find(item => item.id === productId);
  const [added, setAdded] = useState(false);
  if (!product) return <main className="mx-auto max-w-[1180px] px-5 py-24 md:px-8"><h1 className="font-display text-4xl">Product not found</h1><Link to="/instruments" className="mt-6 inline-block border-b border-foreground text-sm">Back to instruments</Link></main>;
  const related = products.filter(item => item.category === product.category && item.id !== product.id);
  const add = () => { addToCart(product); setAdded(true); window.setTimeout(() => setAdded(false), 1400); };
  const buy = () => { addToCart(product); navigate({ to: "/checkout" }); };

  return <main className="min-h-screen bg-background"><section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 md:grid-cols-2 md:px-8 md:py-20"><div className="border border-border bg-card"><img src={product.image} alt={`${product.brand} ${product.name}`} className="aspect-square w-full object-cover" /></div><div className="flex flex-col justify-center"><Link to="/instruments" className="text-xs text-muted-foreground hover:text-foreground">← Back to instruments</Link><p className="mt-8 text-xs tracking-[0.14em] text-muted-foreground">{product.brand} · {product.category}</p><h1 className="mt-2 font-display text-4xl leading-tight md:text-5xl">{product.name}</h1><p className="mt-5 text-2xl">₹ {product.price.toLocaleString("en-IN")}</p><p className={`mt-3 text-sm ${product.stock <= 3 ? "text-destructive" : "text-muted-foreground"}`}>{product.stock > 0 ? `${product.stock} available in stock` : "Currently out of stock"}</p><p className="mt-6 max-w-prose text-sm leading-relaxed text-muted-foreground">{product.description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><button onClick={add} disabled={product.stock === 0} className="bg-foreground px-7 py-3 text-sm text-primary-foreground disabled:opacity-40">{added ? "Added to cart ✓" : "Add to Cart"}</button><button onClick={buy} disabled={product.stock === 0} className="border border-foreground px-7 py-3 text-sm disabled:opacity-40">Buy Now</button></div><div className="mt-10 border-y border-border py-6"><h2 className="text-sm font-medium">Key features</h2><ul className="mt-4 grid gap-2 text-sm text-muted-foreground">{product.features.map(feature => <li key={feature}>• {feature}</li>)}</ul></div></div></section>{related.length > 0 && <section className="border-t border-border bg-sand/40 px-5 py-16 md:px-8 md:py-20"><div className="mx-auto max-w-[1180px]"><p className="eyebrow">You may also like</p><h2 className="mt-2 font-display text-3xl">More from {product.category}</h2><div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">{related.map(item => <Link key={item.id} to="/instruments/$productId" params={{ productId: item.id }} className="group"><div className="overflow-hidden border border-border bg-card"><img src={item.image} alt={item.name} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><p className="mt-3 text-xs text-muted-foreground">{item.brand}</p><p className="mt-1 text-sm font-medium">{item.name}</p><p className="mt-1 text-sm">₹ {item.price.toLocaleString("en-IN")}</p></Link>)}</div></div></section>}</main>;
}
