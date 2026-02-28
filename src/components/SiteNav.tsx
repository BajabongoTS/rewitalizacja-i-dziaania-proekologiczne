import { Leaf, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

export default function SiteNav() {
  const { dark, toggle } = useTheme();

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
          <a href="#rewitalizacja" className="text-muted-foreground hover:text-foreground transition font-medium hidden sm:block">
            Rewitalizacja
          </a>
          <a href="#ekologia" className="text-muted-foreground hover:text-foreground transition font-medium hidden sm:block">
            Ekologia
          </a>
          <Link to="/notatki"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition">
            Notatki
          </Link>
          <button onClick={toggle}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
