import { slides, slideNotes } from "@/data/slides";
import { slideIcons } from "@/data/slideIcons";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";

export default function NotatkiPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="pt-28 pb-20 max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition text-sm font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" /> Powrót do strony
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">Notatki do prezentacji</h1>
        <p className="text-muted-foreground mb-12">Rozszerzone notatki do każdego slajdu – pomocna kartka przy prezentacji.</p>

        <div className="space-y-6">
          {slides.map((slide) => {
            const Icon = slideIcons[slide.id] || Leaf;
            const note = slideNotes[slide.id];
            if (!note && (slide.type === "title" || slide.type === "end")) return null;

            return (
              <motion.section
                key={slide.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-semibold">Slajd {slide.id}</span>
                    <h2 className="text-lg font-bold text-foreground leading-tight">{slide.title}</h2>
                  </div>
                </div>

                {slide.points && (
                  <ul className="space-y-1.5 mb-4">
                    {slide.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                {note && (
                  <div className="bg-muted/50 rounded-xl p-4 text-sm text-foreground/75 leading-relaxed border border-border/50">
                    <span className="font-semibold text-primary text-xs uppercase tracking-wide block mb-1">Rozszerzone notatki</span>
                    {note}
                  </div>
                )}
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
