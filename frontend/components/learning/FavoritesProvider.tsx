"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import type { SongMeta } from "@/data/songCatalog";
import { createClient } from "@/lib/supabase/client";

interface FavoritesContextValue {
  user: User | null;
  loading: boolean;
  favorites: Set<SongMeta["slug"]>;
  notice: string;
  toggleFavorite: (slug: SongMeta["slug"]) => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<Set<SongMeta["slug"]>>(new Set());
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const supabase = createClient();
    let active = true;

    const loadFavorites = async (nextUser: User | null) => {
      if (!active) return;
      setUser(nextUser);
      if (!nextUser) {
        setFavorites(new Set());
        setLoading(false);
        return;
      }
      const { data } = await supabase
        .from("user_song_learning")
        .select("song_slug")
        .eq("is_favorite", true);
      if (active) {
        setFavorites(new Set((data ?? []).map((item) => item.song_slug as SongMeta["slug"])));
        setLoading(false);
      }
    };

    supabase.auth.getUser().then(({ data }) => loadFavorites(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      loadFavorites(session?.user ?? null);
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const toggleFavorite = async (slug: SongMeta["slug"]) => {
    if (!user) {
      setNotice("Log in to save favorite songs.");
      window.setTimeout(() => setNotice(""), 3000);
      return;
    }

    const wasFavorite = favorites.has(slug);
    const nextFavorites = new Set(favorites);
    if (wasFavorite) nextFavorites.delete(slug);
    else nextFavorites.add(slug);
    setFavorites(nextFavorites);

    const supabase = createClient();
    const { error } = await supabase.from("user_song_learning").upsert({
      user_id: user.id,
      song_slug: slug,
      is_favorite: !wasFavorite,
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id,song_slug" });

    if (error) {
      setFavorites(favorites);
      setNotice("We could not update this favorite. Please try again.");
    } else {
      setNotice(wasFavorite ? "Removed from favorites." : "Saved to My Learning.");
    }
    window.setTimeout(() => setNotice(""), 3000);
  };

  return (
    <FavoritesContext.Provider value={{ user, loading, favorites, notice, toggleFavorite }}>
      {children}
      <p className="learning-toast" aria-live="polite">{notice}</p>
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used inside FavoritesProvider.");
  return context;
}
