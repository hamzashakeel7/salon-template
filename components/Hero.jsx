"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* decorative gold halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 gold-halo"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 gold-halo"
      />

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-20 md:pb-24 lg:pb-28">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          {/* Left: Headline + CTAs */}
          <div className="max-w-2xl">
            {/* announcement pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs">
              <span className="inline-flex items-center gap-1 text-primary">
                <StarIcon className="h-3.5 w-3.5" />
                <span className="font-medium">Now open late</span>
              </span>
              <span className="text-muted-foreground">Fri–Sat 9 PM</span>
            </div>

            <h1 className="mt-4 font-serif text-balance text-4xl leading-tight md:text-6xl lg:text-7xl">
              Elevate your{" "}
              <span className="luxe-underline">hair, skin, and nails</span> with
              modern craft
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              Minimal aesthetic. Maximum glow. Curated treatments crafted by
              experts—because subtle luxury never goes out of style.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button className="h-11 px-6 bg-primary text-primary-foreground btn-shimmer cursor-pointer">
                Book appointment
              </Button>
              <Button
                variant="outline"
                className="h-11 px-6 border-foreground/20 bg-transparent"
              >
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2"
                >
                  <span>Browse services</span>
                  <span aria-hidden>→</span>
                </Link>
              </Button>
            </div>

            {/* trust avatars + rating */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  src="/placeholder-user.jpg"
                  alt="Client avatar"
                  className="h-8 w-8 rounded-full border border-border object-cover"
                />
                <img
                  src="/placeholder-user.jpg"
                  alt="Client avatar"
                  className="h-8 w-8 rounded-full border border-border object-cover"
                />
                <img
                  src="/placeholder-user.jpg"
                  alt="Client avatar"
                  className="h-8 w-8 rounded-full border border-border object-cover"
                />
              </div>
              <div className="flex items-center gap-1 text-primary">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by 1.2k+ clients • enviornment-friendly
              </p>
            </div>
          </div>

          {/* Right: Feature slab with sticker */}
          <div className="w-full md:w-[42%]">
            <div className="relative rounded-xl border border-border bg-secondary p-4 sm:p-6">
              {/* sticker */}
              <div className="absolute left-4 top-4 z-10 rounded-full border border-border bg-background/90 px-3 py-1 text-xs backdrop-blur">
                New: Friday slots
              </div>

              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-background">
                <img
                  src="/hero1.jpg"
                  alt="Salon interior with soft gold accents"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm">Signature Glow Facial</p>
                <p className="text-sm font-medium text-primary">60 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
