"use client";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    quote:
      "The color is unreal—subtle yet statement. I walked out feeling like a new person.",
    name: "Ava M.",
  },
  {
    quote: "Minimal, clean, and so premium. They understand “effortless”.",
    name: "Zayn R.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      <h2 className="font-serif text-3xl md:text-4xl">What clients say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((r) => (
          <Card key={r.name} className="border-border bg-card">
            <CardContent className="p-6">
              <p className="text-lg">“{r.quote}”</p>
              <p className="mt-3 text-sm text-muted-foreground">— {r.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
