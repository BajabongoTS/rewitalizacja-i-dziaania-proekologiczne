import { useState, useCallback, useEffect } from "react";
import { slides } from "@/data/slides";
import { slideIcons } from "@/data/slideIcons";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Leaf, Maximize2 } from "lucide-react";

export default function PresentationSection() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const Icon = slideIcons[slide.id] || Leaf;

  const goNext = useCallback(() => setCurrent(c => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  return (
    <section id="prezentacja" className="py-24 sm:py-32 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Prezentacja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Przeglądaj slajdy
          </h2>
        </motion.div>

        {/* Slide viewer */}
        <div className="relative bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
          {/* Slide content */}
          <div className="aspect-video flex items-center justify-center p-8 sm:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
                  {slide.title}
                </h3>
                {slide.points && (
                  <div className="max-w-2xl mx-auto space-y-3 text-left">
                    {slide.points.map((p, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -15, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + i * 0.06 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <p className="text-sm sm:text-base text-muted-foreground">{p}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-muted/30">
            <button onClick={goPrev} disabled={current === 0}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" /> Poprzedni
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/30"}`}
                />
              ))}
            </div>

            <button onClick={goNext} disabled={current === slides.length - 1}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition disabled:opacity-30 disabled:cursor-not-allowed">
              Następny <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide counter */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          Slajd {current + 1} z {slides.length}
        </p>
      </div>
    </section>
  );
}
