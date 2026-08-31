import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";
import { adminAuthEnabled, signInAdmin, watchAdminAuth } from "@/lib/adminAuth";

export const Route = createFileRoute("/admin-login")({ component: AdminLogin });

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => watchAdminAuth((user) => {
    if (user) navigate({ to: "/admin" });
  }), [navigate]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInAdmin(email, password);
      navigate({ to: "/admin" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }

  return <main className="flex min-h-screen items-center justify-center bg-background px-5 py-12"><div className="w-full max-w-md border border-border p-7 md:p-10">
    <p className="eyebrow">Harmony Musicals</p>
    <h1 className="mt-2 font-display text-4xl">Admin sign in</h1>
    <p className="mt-3 text-sm text-muted-foreground">Sign in with the authorized store administrator account.</p>
    {!adminAuthEnabled && <div className="mt-6 border border-border bg-sand/30 p-4 text-sm text-muted-foreground">Firebase admin authentication is not configured yet. Add the Firebase environment variables and <code>VITE_ADMIN_EMAIL</code> before using this login.</div>}
    <form onSubmit={submit} className="mt-8 space-y-5">
      <label className="block text-sm">Email<input value={email} onChange={e => setEmail(e.target.value)} type="email" required autoComplete="username" className="mt-2 w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground" /></label>
      <label className="block text-sm">Password<input value={password} onChange={e => setPassword(e.target.value)} type="password" required autoComplete="current-password" className="mt-2 w-full border border-border bg-background px-4 py-3 outline-none focus:border-foreground" /></label>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button disabled={loading || !adminAuthEnabled} className="w-full bg-foreground px-5 py-3 text-sm text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40">{loading ? "Signing in…" : "Sign in"}</button>
    </form>
  </div></main>;
}
