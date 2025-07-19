"use client";

import ExplosionLottie from "../animations/explosion-lottie";
import { useInView } from "react-intersection-observer";

export default function ExplosionEffectWrapper() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <>
            {inView && (
                <div className="absolute -bottom-55 -right-90 -z-10">
                    <ExplosionLottie />
                </div>
            )}

            <div ref={ref} className="h-[1px]" />
        </>
    );
}

