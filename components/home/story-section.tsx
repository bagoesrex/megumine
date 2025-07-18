import BackgroundImage from "../shared/background-image";
import SplitTextCustom from "../shared/split-text-custom";

export default function StorySection() {
    return (
        <section id="story" className="relative bg-cover bg-center min-h-screen px-5 overflow-hidden">
            <BackgroundImage imageUrl="/images/bg/konosuba-bg.webp" />

            <div className="max-w-5xl mx-auto w-full pt-10 flex flex-col gap-2 items-start min-h-svh">
                <SplitTextCustom text="MY MINE's STORY" />

            </div>
        </section>
    )
}