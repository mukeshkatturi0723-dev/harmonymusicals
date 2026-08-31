import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  if (!items.length && !submitted) return <main className="mx-auto max-w-[700px] px-5 py-24 text-center"><h1 className="font-display text-4xl">Nothing to checkout.</h1><Link to="/instruments" className="mt-6 inline-block border-b border-foreground text-sm">Continue shopping</Link></main>;
  if (submitted) return <main className="mx-auto max-w-[700px] px-5 py-24 text-center"><p className="eyebrow">Order received</p><h1 className="mt-2 font-display text-4xl">Thank you, {name}.</h1><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Your order request has been recorded. The store can confirm availability and delivery details with you.</p><Link to="/instruments" className="mt-8 inline-block bg-foreground px-7 py-3 text-sm text-primary-foreground">Continue shopping</Link></main>;

  const placeOrder = (event: React.FormEvent) => { event.preventDefault(); if (!name || !phone || !address) return; clearCart(); setSubmitted(true); };

  return <main className="mx-auto max-w-[1100px] px-5 py-12 md:px-8 md:py-20"><div className="border-b border-border pb-6"><p className="eyebrow">Harmony Musicals</p><h1 className="mt-2 font-display text-4xl">Checkout</h1></div><div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]"><form onSubmit={placeOrder} className="space-y-5"><label className="block text-sm">Full name<input required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full border border-border px-4 py-3 outline-none focus:border-foreground" /></label><label className="block text-sm">Phone number<input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full border border-border px-4 py-3 outline-none focus:border-foreground" /></label><label className="block text-sm">Delivery address<textarea required value={address} onChange={(e) => setAddress(e.target.value)} rows={5} className="mt-2 w-full resize-none border border-border px-4 py-3 outline-none focus:border-foreground" /></label><div className="border border-border p-4 text-sm"><p className="font-medium">Payment</p><p className="mt-1 text-muted-foreground">Cash on Delivery · Online payment can be connected in the next phase.</p></div><button type="submit" className="w-full bg-foreground px-5 py-3 text-sm text-primary-foreground">Place order · ₹ {subtotal.toLocaleString("en-IN")}</button></form><aside className="h-fit border border-border p-6"><h2 className="font-display text-2xl">Your order</h2><div className="mt-5 space-y-4">{items.map(({ product, quantity }) => <div key={product.id} className="flex justify-between gap-4 text-sm"><span>{product.name} × {quantity}</span><span className="shrink-0">₹ {(product.price * quantity).toLocaleString("en-IN")}</span></div>)}</div><div className="mt-6 border-t border-border pt-5 flex justify-between font-medium"><span>Total</span><span>₹ {subtotal.toLocaleString("en-IN")}</span></div></aside></div></main>;
}
