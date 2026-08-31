import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const { items, itemCount, subtotal, removeFromCart, setQuantity } = useCart();
  const money = (value: number) => `₹ ${value.toLocaleString("en-IN")}`;

  if (!items.length) return <main className="mx-auto max-w-[900px] px-5 py-24 text-center md:px-8"><p className="eyebrow">Your cart</p><h1 className="mt-2 font-display text-4xl">Your cart is empty.</h1><p className="mt-4 text-sm text-muted-foreground">Add an instrument to start your order.</p><Link to="/instruments" className="mt-8 inline-block bg-foreground px-7 py-3 text-sm text-primary-foreground">Shop instruments</Link></main>;

  return <main className="mx-auto max-w-[1100px] px-5 py-12 md:px-8 md:py-20">
    <div className="flex items-end justify-between border-b border-border pb-6"><div><p className="eyebrow">Harmony Musicals</p><h1 className="mt-2 font-display text-4xl">Shopping cart</h1></div><span className="text-sm text-muted-foreground">{itemCount} item{itemCount === 1 ? "" : "s"}</span></div>
    <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
      <div className="space-y-5">{items.map(({ product, quantity }) => <div key={product.id} className="flex gap-4 border-b border-border pb-5"><img src={product.image} alt={product.name} className="h-28 w-28 object-cover" /><div className="flex min-w-0 flex-1 flex-col"><p className="text-xs text-muted-foreground">{product.brand}</p><h2 className="mt-1 text-sm font-medium">{product.name}</h2><p className="mt-2 text-sm">{money(product.price)}</p><div className="mt-auto flex items-center gap-3 pt-3"><button onClick={() => setQuantity(product.id, quantity - 1)} className="border px-2">−</button><span className="text-sm">{quantity}</span><button onClick={() => setQuantity(product.id, quantity + 1)} className="border px-2" disabled={quantity >= product.stock}>+</button><button onClick={() => removeFromCart(product.id)} className="ml-3 text-xs text-muted-foreground underline">Remove</button></div></div><p className="text-sm">{money(product.price * quantity)}</p></div>)}</div>
      <aside className="h-fit border border-border p-6"><h2 className="font-display text-2xl">Order summary</h2><div className="mt-6 flex justify-between text-sm"><span>Subtotal</span><span>{money(subtotal)}</span></div><div className="mt-3 flex justify-between text-sm text-muted-foreground"><span>Delivery</span><span>Calculated at checkout</span></div><div className="mt-6 border-t border-border pt-5 flex justify-between font-medium"><span>Total</span><span>{money(subtotal)}</span></div><Link to="/checkout" className="mt-6 block bg-foreground px-5 py-3 text-center text-sm text-primary-foreground">Proceed to checkout</Link></aside>
    </div>
  </main>;
}
