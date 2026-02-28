import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import PresentationSection from "@/components/PresentationSection";
import Footer from "@/components/Footer";
import { slides } from "@/data/slides";
import { slideIcons } from "@/data/slideIcons";
import { Leaf } from "lucide-react";

const contentSlides = slides.filter(s => s.type === "content" && s.points);

const Index = () => {
  // Split content into two groups for nav anchors
  const rewitalizacjaSlides = contentSlides.slice(0, 5); // slides 2-6
  const ekologiaSlides = contentSlides.slice(5); // slides 7-12

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <HeroSection />

      {/* Rewitalizacja sections */}
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
              alt={i % 2 === 1}
            />
          );
        })}
      </div>

      {/* Ekologia sections */}
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
              alt={(i + rewitalizacjaSlides.length) % 2 === 1}
            />
          );
        })}
      </div>

      <PresentationSection />
      <Footer />
    </div>
  );
};

export default Index;
