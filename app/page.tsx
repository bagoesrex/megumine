import HeroSection from "@/components/home/hero-section";
import StorySection from "@/components/home/story-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <StorySection />
    </main >
  );
}
