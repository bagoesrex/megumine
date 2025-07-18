"use client"

import { useEffect, useState } from "react";
import SplitText from "../react-bits/TextAnimations/SplitText/SplitText"

type Props = {
    text: string;
    showAfter?: number;
    duration?: number;
    isWords: boolean;
};

export default function SplitTextCustom({ text, showAfter = 0, duration = 1.5, isWords = true }: Props) {
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
        <SplitText
            text={text}
            className="text-3xl md:text-5xl text-primary font-extrabold overflow-visible text-shadow-md text-shadow-white"
            ease="elastic.out"
            splitType={isWords ? "words" : "chars"}
            duration={duration}
        />
    )
}