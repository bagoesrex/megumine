"use client"

import { useEffect, useState } from "react";
import BlurText from "../react-bits/TextAnimations/BlurText/BlurText";
import { motion } from "framer-motion";

type Props = {
    text: string;
    showAfter?: number;
};

export default function BlurTextCustom({ text, showAfter = 0 }: Props) {
    const [shouldShow, setShouldShow] = useState(showAfter === 0)

    useEffect(() => {
        if (showAfter > 0) {
            const timer = setTimeout(() => {
                setShouldShow(true)
            }, showAfter)

            return () => clearTimeout(timer)
        }
    }, [showAfter])

    if (!shouldShow) return null

    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="w-full h-fit max-w-180 px-3 py-2 bg-primary/50 text-white rounded-md">
                {text.split('\n\n').map((paragraph, idx) => (
                    <div key={idx} className="-mb-1">
                        <BlurText
                            text={paragraph}
                            delay={10}
                            animateBy="words"
                            direction="bottom"
                            className="text-1xl leading-relaxed"
                        />
                    </div>
                ))}
            </div>
        </motion.div>

    )
}