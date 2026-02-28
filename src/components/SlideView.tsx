import { slides, type SlideData } from "@/data/slides";
import { slideIcons } from "@/data/slideIcons";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideViewProps {
  slide: SlideData;
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const TitleSlide = ({ slide }: { slide: SlideData }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-12 bg-gradient-to-br from-primary/10 via-background to-secondary/30">
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
      <Leaf className="w-20 h-20 text-primary mb-8" />
    </motion.div>
    <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
      className="text-5xl md:text-6xl font-black text-primary leading-tight mb-6">
      {slide.title}
    </motion.h1>
    {slide.points?.map((p, i) => (
      <motion.p key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 + i * 0.15 }}
        className="text-xl text-muted-foreground">{p}</motion.p>
    ))}
  </div>
);

const ContentSlide = ({ slide }: { slide: SlideData }) => {
  const Icon = slideIcons[slide.id] || Leaf;
  return (
    <div className="flex flex-col h-full px-10 md:px-16 py-12 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-foreground leading-tight">
          {slide.title}
        </motion.h2>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-5">
        {slide.points?.map((point, i) => (
          <motion.div key={i}
            initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="flex items-start gap-4">
            <span className="mt-1.5 w-3 h-3 rounded-full bg-primary shrink-0" />
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">{point}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const BibliographySlide = ({ slide }: { slide: SlideData }) => (
  <div className="flex flex-col items-center justify-center h-full px-12 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
    <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className="text-4xl font-black text-primary mb-12">{slide.title}</motion.h2>
    {slide.points?.map((p, i) => (
      <motion.p key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-xl text-foreground/80 bg-card border border-border rounded-xl px-8 py-4 shadow-sm">
        📚 {p}
      </motion.p>
    ))}
  </div>
);

const EndSlide = ({ slide }: { slide: SlideData }) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-12 bg-gradient-to-br from-primary/15 via-background to-accent/10">
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
      <Leaf className="w-16 h-16 text-primary mb-6" />
    </motion.div>
    <motion.h2 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
      className="text-5xl font-black text-primary mb-4">{slide.title}</motion.h2>
    {slide.points?.map((p, i) => (
      <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-xl text-muted-foreground">{p}</motion.p>
    ))}
  </div>
);

export default function SlideView({ slide, current, total, onPrev, onNext }: SlideViewProps) {
  const renderSlide = () => {
    switch (slide.type) {
      case "title": return <TitleSlide slide={slide} />;
      case "bibliography": return <BibliographySlide slide={slide} />;
      case "end": return <EndSlide slide={slide} />;
      default: return <ContentSlide slide={slide} />;
    }
  };

  return (
    <div className="relative w-full h-full select-none">
      <AnimatePresence mode="wait">
        <motion.div key={slide.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }} className="w-full h-full">
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4">
        <button onClick={onPrev} disabled={current === 0}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition disabled:opacity-30 disabled:cursor-not-allowed">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm text-muted-foreground font-semibold tabular-nums">
          {current + 1} / {total}
        </span>
        <button onClick={onNext} disabled={current === total - 1}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition disabled:opacity-30 disabled:cursor-not-allowed">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
