import { useState, useCallback, useEffect } from "react";
import { slides } from "@/data/slides";
import SlideView from "@/components/SlideView";
import SlideThumbnails from "@/components/SlideThumbnails";
import { Link } from "react-router-dom";
import { FileText, Leaf } from "lucide-react";

const Index = () => {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => setCurrent(c => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-card">
        <div className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground text-sm">Rewitalizacja i działania proekologiczne</span>
        </div>
        <Link to="/notatki"
          className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition">
          <FileText className="w-4 h-4" />
          Notatki
        </Link>
      </header>

      {/* Slide area */}
      <div className="flex-1 overflow-hidden">
        <SlideView
          slide={slides[current]}
          current={current}
          total={slides.length}
          onPrev={goPrev}
          onNext={goNext}
        />
      </div>

      {/* Thumbnails */}
      <SlideThumbnails current={current} onSelect={setCurrent} />
    </div>
  );
};

export default Index;
