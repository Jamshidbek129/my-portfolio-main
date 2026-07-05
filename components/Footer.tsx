"use client";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-8 pb-6">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jamshidbek Shokirov. Barcha huquqlar himoyalangan.
        </p>

        <p className="text-sm text-muted-foreground">
          Built with{" "}
          <span className="font-medium text-foreground">Next.js</span>,{" "}
          <span className="font-medium text-foreground">TypeScript</span>,{" "}
          <span className="font-medium text-foreground">Tailwind CSS</span> and{" "}
          <span className="font-medium text-foreground">Shadcn/UI</span>.
        </p>
      </div>
    </footer>
  );
}