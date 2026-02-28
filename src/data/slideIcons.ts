import { Leaf, Recycle, Droplets, Zap, Building2, TreePine, Factory, Bus, Users, BookOpen, Heart, Hammer, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const slideIcons: Record<number, LucideIcon> = {
  1: Leaf,
  2: Building2,
  3: Zap,
  4: Building2,
  5: Factory,      // Rewitalizacja obszarów poprzemysłowych i pokolejowych
  6: Shield,       // Rewitalizacja terenów powojskowych
  7: Building2,    // Rewitalizacja blokowisk i zabudowy powojennej (merged)
  8: TreePine,     // Działania proekologiczne w rolnictwie
  9: Leaf,         // Rolnictwo ekologiczne i przykłady produktów
  10: Factory,     // Działania proekologiczne w przemyśle
  11: Bus,         // Działania proekologiczne w usługach
  12: Users,       // Współodpowiedzialność za środowisko
  13: Recycle,     // Działania proekologiczne w naszym otoczeniu
  14: BookOpen,    // Bibliografia
  15: Heart,       // Dziękuję za uwagę!
};
