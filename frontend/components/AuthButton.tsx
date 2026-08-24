"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

export default function AuthButton({ onNavigate }: { onNavigate?: () => void }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    let active = true;
    let supabase;

    const authError = new URLSearchParams(window.location.search).get("authError");
    if (authError === "email") {
      setError("This login link is invalid or expired. Please request a new one.");
      setLoading(false);
    }

    try {
      supabase = createClient();
    } catch (configurationError) {
      Promise.resolve().then(() => {
        if (active) {
          setError(configurationError instanceof Error ? configurationError.message : "Login is unavailable.");
          setLoading(false);
        }
      });
      return;
    }

    supabase.auth.getUser().then(({ data }) => {
      if (active) {
        setUser(data.user);
        setLoading(false);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/confirm?next=${encodeURIComponent(window.location.pathname)}`,
          shouldCreateUser: true,
        },
      });
      if (signInError) throw signInError;
      setSent(true);
    } catch (signInError) {
      setError(signInError instanceof Error ? signInError.message : "Could not send the login link.");
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    setLoading(true);
    setError("");
    try {
      const supabase = createClient();
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
      setUser(null);
      onNavigate?.();
    } catch (signOutError) {
      setError(signOutError instanceof Error ? signOutError.message : "Logout failed.");
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div className="nav-login-error" role="alert">
        <span>{error}</span>
        <button className="nav-login" type="button" onClick={() => { setError(""); setShowForm(true); }}>Try again</button>
      </div>
    );
  }

  if (user) {
    return (
      <div className="nav-user">
        <span title={user.email}>{user.user_metadata.full_name ?? user.email}</span>
        <button className="nav-login" type="button" onClick={signOut} disabled={loading}>Log out</button>
      </div>
    );
  }

  if (!showForm) {
    return <button className="nav-login" type="button" onClick={() => setShowForm(true)} disabled={loading}>{loading ? "Loading…" : "Log in"}</button>;
  }

  return (
    <form className="nav-email-login" onSubmit={signIn}>
      {sent ? (
        <span className="nav-login-message">Check your email for the login link.</span>
      ) : (
        <>
          <label className="sr-only" htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <button className="button button--primary button--compact" type="submit" disabled={loading}>
            {loading ? "Sending…" : "Email me a login link"}
          </button>
        </>
      )}
      <button className="nav-login nav-login--cancel" type="button" onClick={() => { setShowForm(false); setSent(false); setError(""); setLoading(false); }}>
        {sent ? "Close" : "Cancel"}
      </button>
    </form>
  );
}
