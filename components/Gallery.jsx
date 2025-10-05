"use client";

const looks = [
  {
    src: "/gallery1.jpg",
    alt: "Editorial haircut",
    wide: true,
    caption: "Editorial layers",
  },
  {
    src: "/gallery2.jpg",
    alt: "Blonde balayage",
    caption: "Soft blonde balayage",
  },
  {
    src: "/gallery3.jpg",
    alt: "Skincare facial",
    caption: "Glass skin facial",
  },
  {
    src: "/gallery4.jpg",
    alt: "Modern style",
    caption: "Copper gloss",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-4xl">Recent looks</h2>
          <a
            href="#instagram"
            className="text-sm text-primary underline underline-offset-4 hover:opacity-80"
          >
            See more on Instagram →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
          {looks.map((item, i) => {
            const isFeatured = i === 0;
            const span = isFeatured
              ? "sm:col-span-2 md:col-span-3 lg:col-span-12"
              : "sm:col-span-1 md:col-span-1 lg:col-span-4";
            const aspect = isFeatured
              ? "aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]"
              : "aspect-[4/5]";

            return (
              <div key={i} className={`${span}`}>
                <div
                  className={`group relative overflow-hidden rounded-lg border border-border bg-background ${aspect}`}
                >
                  <img
                    src={
                      item.src ||
                      "/placeholder.svg?height=800&width=1200&query=premium%20salon%20look"
                    }
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
                    <div className="rounded-full border border-border bg-background/90 px-3 py-1 text-xs backdrop-blur">
                      {item.caption}
                    </div>
                    <span className="rounded-full border border-border bg-background/90 px-2 py-1 text-[10px] tracking-wide">
                      View look →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
