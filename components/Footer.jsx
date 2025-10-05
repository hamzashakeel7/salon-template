"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row py-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} COMPANY NAME. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:opacity-80">
              Privacy
            </a>
            <a href="#" className="hover:opacity-80">
              Terms
            </a>
            <a href="#" className="hover:opacity-80">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground pb-5">
          Built by{" "}
          <a
            href="https://webwizdurrani.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary underline-offset-4 hover:text-primary text-sm text-orange-500"
          >
            webwizdurrani
          </a>
        </div>
      </div>
    </footer>
  );
}
