"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide">
          <span className="px-2 py-1 border border-border rounded-md">
            COMPANY NAME
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm hover:opacity-80">
            Services
          </Link>
          <Link href="#gallery" className="text-sm hover:opacity-80">
            Gallery
          </Link>
          <Link href="#testimonials" className="text-sm hover:opacity-80">
            Reviews
          </Link>
          <Button className="bg-primary text-primary-foreground btn-shimmer">
            Book appointment
          </Button>
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <div className="h-0.5 w-4 bg-foreground" />
            <div className="h-0.5 w-4 bg-foreground" />
            <div className="h-0.5 w-4 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4">
            <Link href="#services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="#gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link href="#testimonials" onClick={() => setOpen(false)}>
              Reviews
            </Link>
            <Button
              className="bg-primary text-primary-foreground w-full"
              onClick={() => setOpen(false)}
            >
              Book appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
