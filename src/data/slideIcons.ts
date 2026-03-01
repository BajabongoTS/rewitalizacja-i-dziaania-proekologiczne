import { Leaf, Recycle, Droplets, Zap, Building2, TreePine, Factory, Bus, Users, BookOpen, Heart, Hammer, Shield, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const slideIcons: Record<number, LucideIcon> = {
  1: Leaf,
  2: Building2,
  3: Zap,
  4: Building2,
  5: MapPin,        // Rewitalizacja krajobrazów miast i przedmieść
  6: Factory,       // Rewitalizacja obszarów poprzemysłowych i pokolejowych
  7: Shield,        // Rewitalizacja terenów powojskowych
  8: Building2,     // Rewitalizacja blokowisk i zabudowy powojennej
  9: TreePine,      // Działania proekologiczne w rolnictwie
  10: Leaf,         // Rolnictwo ekologiczne i przykłady produktów
  11: Factory,      // Działania proekologiczne w przemyśle
  12: Bus,          // Działania proekologiczne w usługach
  13: Users,        // Współodpowiedzialność i działania proekologiczne
  14: BookOpen,     // Bibliografia
  15: Heart,        // Dziękuję za uwagę!
};
