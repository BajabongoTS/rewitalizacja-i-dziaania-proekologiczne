import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import { slides } from "@/data/slides";
import { slideIcons } from "@/data/slideIcons";
import { Leaf } from "lucide-react";

const contentSlides = slides.filter(s => s.type === "content" && s.points);
const rewitalizacjaSlides = contentSlides.slice(0, 5);
const ekologiaSlides = contentSlides.slice(5);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <HeroSection />

      <div id="rewitalizacja">
        {rewitalizacjaSlides.map((slide, i) => {
          const Icon = slideIcons[slide.id] || Leaf;
          return (
            <ContentSection
              key={slide.id}
              badge={`Rewitalizacja · ${i + 1}`}
              title={slide.title}
              points={slide.points!}
              icon={Icon}
              index={i}
            />
          );
        })}
      </div>

      <div id="ekologia">
        {ekologiaSlides.map((slide, i) => {
          const Icon = slideIcons[slide.id] || Leaf;
          return (
            <ContentSection
              key={slide.id}
              badge={`Ekologia · ${i + 1}`}
              title={slide.title}
              points={slide.points!}
              icon={Icon}
              index={i + rewitalizacjaSlides.length}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
