import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ContentSectionProps {
  id?: string;
  badge: string;
  title: string;
  points: string[];
  icon: LucideIcon;
  index: number;
}

export default function ContentSection({ id, badge, title, points, icon: Icon, index }: ContentSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section id={id} className={`min-h-screen flex items-center ${isEven ? "" : "bg-section-alt"}`}>
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
          {/* Icon block */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2rem] bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-primary/70" />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1">
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1 rounded-full mb-4"
            >
              {badge}
            </motion.span>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-foreground"
            >
              {title}
            </motion.h2>

            <div className="space-y-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ x: isEven ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-4 group"
                >
                  <span className="mt-2 w-2.5 h-2.5 rounded-full bg-primary/40 group-hover:bg-primary transition shrink-0" />
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
