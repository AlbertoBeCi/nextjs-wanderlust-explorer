import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { CategoriesSection } from "@/components/home/CategoriesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedExperiences />
      <CategoriesSection />
    </>
  );
}
