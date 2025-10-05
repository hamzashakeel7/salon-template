"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Cut + Style",
    desc: "Precision cuts and editorial styling.",
    img: "/services1.jpg",
  },
  {
    title: "Color Alchemy",
    desc: "Subtle dimension or bold statements.",
    img: "/services2.jpg",
  },
  {
    title: "Skin Treatments",
    desc: "Clinical-grade glow, gentle on skin.",
    img: "/services3.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-8 md:mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-balance">
          Services designed for effortless luxury
        </h2>
        <p className="mt-2 text-muted-foreground">
          Curated menu with transparent pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.title}
            className="overflow-hidden bg-card border-border hover:shadow-lg transition-shadow"
          >
            <CardHeader className="p-0">
              <img
                src={item.img || "/placeholder.svg"}
                alt={`${item.title} example`}
                className="h-64 w-full object-cover"
              />
            </CardHeader>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{item.title}</h3>
                <span className="text-primary">from $</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
