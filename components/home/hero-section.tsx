import BackgroundImage from "../shared/background-image";
import SplitTextCustom from "../shared/split-text-custom";
import MeguminAvatar from "../shared/megumin-avatar";
import MasonryGrid from "../shared/masonry-grid";
import { CardHeader, CardTitle } from "../ui/card";
import FadeInCard from "../animations/fade-in-card";
import { masonryData } from "@/constants/megumin";
import ExplosionEffectWrapper from "../shared/explosion-effect-wrapper";

export default function HeroSection() {
    return (
        <section id="hero" className="relative bg-cover bg-center min-h-screen px-5 overflow-hidden">
            <BackgroundImage />
            <MeguminAvatar />

            <div className="max-w-5xl mx-auto w-full py-10 flex flex-col gap-2 items-start min-h-svh">
                <SplitTextCustom text="MEGUMINE" isWords={false} />

                <FadeInCard >
                    <CardHeader className="p-0">
                        <CardTitle className="md:text-md">『この素晴らしい世界に祝福を！』</CardTitle>
                    </CardHeader>
                </FadeInCard>

                <div className="w-[70%] h-260 overflow-scroll no-scrollbar">
                    <MasonryGrid items={masonryData} />
                </div>
            </div>

            <ExplosionEffectWrapper />
        </section>
    )
}