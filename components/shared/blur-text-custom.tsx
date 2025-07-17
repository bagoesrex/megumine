import { useEffect, useState } from "react";
import BlurText from "../react-bits/TextAnimations/BlurText/BlurText";

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
        <BlurText
            text={text}
            delay={30}
            animateBy="letters"
            direction="bottom"
            className="text-2xl mb-8"
        />
    )
}