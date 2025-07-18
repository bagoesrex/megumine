import BackgroundImage from "../shared/background-image";

import { storyData } from "@/constants/megumin";
import StoryContent from "../shared/story-content";

export default function StorySection() {
    return (
        <section id="story" className="relative bg-cover bg-center min-h-screen px-5 overflow-hidden">
            <BackgroundImage imageUrl="/images/bg/konosuba-bg.webp" />

            <div className="max-w-5xl mx-auto w-full pt-10 flex flex-col gap-10 items-start min-h-svh">
                {storyData.map((story, index) => (
                    <StoryContent key={index} title={story.title} subtitle={story.subtitle} description={story.description} index={index} />
                ))}
            </div>
        </section>
    )
}