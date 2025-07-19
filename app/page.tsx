import HeroSection from "@/components/home/hero-section";
import StorySection from "@/components/home/story-section";
import MobileWarning from "@/components/shared/mobile-warning";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MobileWarning />

      <HeroSection />

      <StorySection />
    </main >
  );
}
