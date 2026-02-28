import { slides } from "@/data/slides";
import { slideNotes } from "@/data/slides";
import { slideIcons } from "@/data/slideIcons";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf } from "lucide-react";

export default function NotatkiPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center gap-4 px-6 py-4 border-b border-border bg-card/90 backdrop-blur">
        <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" /> Prezentacja
        </Link>
        <span className="text-muted-foreground text-sm">|</span>
        <span className="font-bold text-foreground text-sm">Notatki do prezentacji</span>
      </header>

      <main className="max-w-3xl mx-auto py-10 px-6 space-y-8">
        {slides.map((slide) => {
          const Icon = slideIcons[slide.id] || Leaf;
          const note = slideNotes[slide.id];
          if (!note && slide.type === "title") return null;
          if (!note && slide.type === "end") return null;

          return (
            <section key={slide.id} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-semibold">Slajd {slide.id}</span>
                  <h2 className="text-xl font-bold text-foreground leading-tight">{slide.title}</h2>
                </div>
              </div>

              {slide.points && (
                <ul className="space-y-1.5 mb-4">
                  {slide.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-primary/50 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}

              {note && (
                <div className="bg-muted/50 rounded-xl p-4 text-sm text-foreground/75 leading-relaxed border border-border/50">
                  <span className="font-semibold text-primary text-xs uppercase tracking-wide block mb-1">Rozszerzone notatki:</span>
                  {note}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}
