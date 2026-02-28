import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground">Rewitalizacja i działania proekologiczne</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          Źródło: „Oblicza geografii 2" – podręcznik do geografii
        </p>
        <p className="text-xs text-muted-foreground/60">
          Rozdział 8 · Wpływ człowieka na środowisko
        </p>
      </div>
    </footer>
  );
}
