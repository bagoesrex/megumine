"use client";

import { useInView } from "react-intersection-observer";
import BlurText from "../react-bits/TextAnimations/BlurText/BlurText";
import BlurTextCustom from "./blur-text-custom";
import SplitTextCustom from "./split-text-custom";
import StoryCard from "./story-card";
import { motion } from "framer-motion";

type Props = {
    title: string;
    subtitle: string;
    description: string;
    index: number;
    imageUrl: string;
};

export default function StoryContent({
    title,
    subtitle,
    description,
    index,
    imageUrl,
}: Props) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });

    return (
        <div ref={ref} className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="transition-all"
            >
                <SplitTextCustom text={title} duration={2} isWords={true} />
                <BlurText
                    text={subtitle}
                    delay={10}
                    animateBy="letters"
                    direction="bottom"
                    className="text-1xl leading-relaxed mb-2"
                />

                <div
                    className={`flex w-full gap-4 ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
                        }`}
                >
                    <div className="max-w-180 w-full">
                        <BlurTextCustom text={description} showAfter={400} />
                    </div>
                    <div className="max-w-150 flex flex-col gap-4">
                        <StoryCard imageUrl={imageUrl} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
