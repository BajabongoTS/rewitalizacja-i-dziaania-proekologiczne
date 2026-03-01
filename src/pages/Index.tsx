import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import { slides } from "@/data/slides";
import { slideIcons } from "@/data/slideIcons";
import { Leaf } from "lucide-react";

const contentSlides = slides.filter(s => s.type === "content" && s.points);
const allSlides = contentSlides.map((slide, i) => ({
  ...slide,
  sectionId: `slide-${slide.id}`,
  badge: i < 7 ? `Rewitalizacja · ${i + 1}` : `Ekologia · ${i - 6}`,
}));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <HeroSection />

      <div id="rewitalizacja">
        {allSlides.filter((_, i) => i < 7).map((slide, i) => {
          const Icon = slideIcons[slide.id] || Leaf;
          const globalIdx = i;
          return (
            <ContentSection
              key={slide.id}
              id={slide.sectionId}
              badge={slide.badge}
              title={slide.title}
              points={slide.points!}
              icon={Icon}
              index={globalIdx}
              prevSlideId={globalIdx > 0 ? allSlides[globalIdx - 1].sectionId : undefined}
              nextSlideId={globalIdx < allSlides.length - 1 ? allSlides[globalIdx + 1].sectionId : undefined}
              prevSlideTitle={globalIdx > 0 ? allSlides[globalIdx - 1].title : undefined}
              nextSlideTitle={globalIdx < allSlides.length - 1 ? allSlides[globalIdx + 1].title : undefined}
            />
          );
        })}
      </div>

      <div id="ekologia">
        {allSlides.filter((_, i) => i >= 7).map((slide, i) => {
          const Icon = slideIcons[slide.id] || Leaf;
          const globalIdx = i + 7;
          return (
            <ContentSection
              key={slide.id}
              id={slide.sectionId}
              badge={slide.badge}
              title={slide.title}
              points={slide.points!}
              icon={Icon}
              index={globalIdx}
              prevSlideId={globalIdx > 0 ? allSlides[globalIdx - 1].sectionId : undefined}
              nextSlideId={globalIdx < allSlides.length - 1 ? allSlides[globalIdx + 1].sectionId : undefined}
              prevSlideTitle={globalIdx > 0 ? allSlides[globalIdx - 1].title : undefined}
              nextSlideTitle={globalIdx < allSlides.length - 1 ? allSlides[globalIdx + 1].title : undefined}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
