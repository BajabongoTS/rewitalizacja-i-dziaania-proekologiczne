import { slides } from "@/data/slides";
import { slideIcons } from "@/data/slideIcons";
import { Leaf } from "lucide-react";

interface SlideThumbnailsProps {
  current: number;
  onSelect: (index: number) => void;
}

export default function SlideThumbnails({ current, onSelect }: SlideThumbnailsProps) {
  return (
    <div className="w-full overflow-x-auto py-3 px-4 flex gap-3 bg-card border-t border-border">
      {slides.map((slide, i) => {
        const Icon = slideIcons[slide.id] || Leaf;
        return (
          <button key={slide.id} onClick={() => onSelect(i)}
            className={`shrink-0 w-36 h-20 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-1 text-xs font-semibold
              ${i === current
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-muted/30 text-muted-foreground hover:border-primary/40"
              }`}>
            <Icon className="w-4 h-4" />
            <span className="line-clamp-2 text-center px-2 leading-tight">{slide.title}</span>
          </button>
        );
      })}
    </div>
  );
}
