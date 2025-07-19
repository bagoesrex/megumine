import BackgroundImage from "../shared/background-image";
import SplitTextCustom from "../shared/split-text-custom";
import MeguminAvatar from "../shared/megumin-avatar";
import ExplosionLottie from "../shared/explosion-effect-wrapper";
import MasonryGrid from "../shared/masonry-grid";
import { CardHeader, CardTitle } from "../ui/card";
import FadeInCard from "../animations/fade-in-card";

const items = [
    {
        id: "1",
        img: "/images/bg/megumin-bg.webp",
        url: "/images/bg/megumin-bg.webp",
        height: 400,
    },
    {
        id: "2",
        img: "/images/bg/megumin-bg.webp",
        url: "/images/bg/megumin-bg.webp",
        height: 250,
    },
    {
        id: "3",
        img: "/images/bg/megumin-bg.webp",
        url: "/images/bg/megumin-bg.webp",
        height: 400,
    },
    {
        id: "4",
        img: "/images/bg/megumin-bg.webp",
        url: "/images/bg/megumin-bg.webp",
        height: 250,
    },
];

export default function HeroSection() {
    return (
        <section id="hero" className="relative bg-cover bg-center min-h-screen px-5 overflow-hidden">
            <BackgroundImage />
            <MeguminAvatar />
            <ExplosionLottie />

            <div className="max-w-5xl mx-auto w-full py-10 flex flex-col gap-2 items-start min-h-svh">
                <SplitTextCustom text="MEGUMINE" />

                <FadeInCard >
                    <CardHeader className="p-0">
                        <CardTitle>『この素晴らしい世界に祝福を！』</CardTitle>
                    </CardHeader>
                </FadeInCard>

                <div className="w-[65%]">
                    <MasonryGrid items={items} />
                </div>
            </div>
        </section>
    )
}