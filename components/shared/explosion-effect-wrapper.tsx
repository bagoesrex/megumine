"use client"

import ExplosionLottie from "../animations/explosion-lottie"

export default function ExplosionEffectWrapper() {
    return (
        <div className="absolute -bottom-55 -right-80 -z-10">
            <ExplosionLottie />
        </div>
    )
}

