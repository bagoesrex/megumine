"use client"

import BackgroundImage from "../shared/background-image";
import SplitText from "../react-bits/TextAnimations/SplitText/SplitText";

export default function HeroSection() {
    return (
        <section id="hero" className="relative bg-cover bg-center min-h-screen px-5">
            <BackgroundImage />

            <div className="max-w-5xl mx-auto py-10">
                <SplitText
                    text="MEGUMINE"
                    className="text-5xl text-primary text-center font-extrabold overflow-visible text-shadow-md text-shadow-white"
                    ease="elastic.out"
                    splitType="chars"
                    duration={1.5}
                />
            </div>
        </section>
    )
}