import BackgroundImage from "../shared/background-image";
import SplitTextCustom from "../shared/split-text-custom";
import BlurTextCustom from "../shared/blur-text-custom";

import { meguminText } from "@/constants/megumin";
import Image from "next/image";
import StoryCard from "../shared/story-card";

const items = [
    { img: "/images/bg/megumin-bg.webp" },
    { img: "/images/bg/megumin-bg.webp" },
    { img: "/images/bg/megumin-bg.webp" },
    { img: "/images/bg/megumin-bg.webp" },
];

export default function StorySection() {
    return (
        <section id="story" className="relative bg-cover bg-center min-h-screen px-5 overflow-hidden">
            <BackgroundImage imageUrl="/images/bg/konosuba-bg.webp" />

            <div className="max-w-5xl mx-auto w-full pt-10 flex flex-col gap-2 items-start min-h-svh">
                <SplitTextCustom text="MY MINE's STORY" />

                <div className="flex flex-row gap-4 w-full">
                    <div className="max-w-180 w-full">
                        <BlurTextCustom text={meguminText} showAfter={400} />
                    </div>
                    <div className="max-w-150 flex flex-col gap-4">
                        {items.map((item, index) => (
                            <StoryCard key={index} imageUrl={item.img} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}