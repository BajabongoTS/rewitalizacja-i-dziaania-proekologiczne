import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Leaf className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-sm text-foreground hidden sm:block">Rewitalizacja & Ekologia</span>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <a href="#rewitalizacja" className="text-muted-foreground hover:text-foreground transition font-medium">
            Rewitalizacja
          </a>
          <a href="#ekologia" className="text-muted-foreground hover:text-foreground transition font-medium">
            Ekologia
          </a>
          <a href="#prezentacja" className="text-muted-foreground hover:text-foreground transition font-medium">
            Prezentacja
          </a>
          <Link to="/notatki"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition">
            Notatki
          </Link>
        </div>
      </div>
    </nav>
  );
}
