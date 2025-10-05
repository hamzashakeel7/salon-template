"use client";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-border p-8 md:p-12 bg-secondary">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl">
                Ready for your glow-up?
              </h3>
              <p className="mt-1 text-muted-foreground">
                Reserve your chair in under 60 seconds.
              </p>
            </div>
            <Button className="bg-primary text-primary-foreground h-11 px-6 btn-shimmer">
              Book appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
