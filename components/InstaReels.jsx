"use client";

import useSWR from "swr";
import { Button } from "@/components/ui/button";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function InstagramReels() {
  const { data, isLoading } = useSWR("/api/instagram-reels", fetcher, {
    revalidateOnFocus: false,
  });
  const reels =
    data?.items ||
    new Array(3).fill(0).map((_, i) => ({
      id: `placeholder-${i}`,
      thumbnail_url: "/placeholder.jpg",
      permalink: "#",
      caption: "Reel",
    }));

  return (
    <section id="instagram" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Instagram Reels</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fresh vibes from our studio—tap to watch
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex bg-transparent"
          >
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Follow on Instagram
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {reels.map((r) => (
            <a
              key={r.id}
              href={r.permalink || "#"}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-lg border border-border bg-secondary"
            >
              <div className="aspect-[9/16] w-full">
                {isLoading ? (
                  <div className="h-full w-full animate-pulse bg-muted" />
                ) : (
                  <img
                    src={r.thumbnail_url || "/placeholder.jpg"}
                    alt={r.caption || "Instagram reel"}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                )}
              </div>
              {/* overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <span className="rounded-full border border-border bg-background/90 px-2 py-1 text-[10px] backdrop-blur">
                  Reel
                </span>
              </div>
              <div className="absolute right-2 top-2 rounded-full border border-border bg-background/90 px-2 py-1 text-[10px] backdrop-blur">
                Watch →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Button asChild variant="outline">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
