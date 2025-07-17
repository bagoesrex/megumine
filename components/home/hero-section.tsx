import BackgroundImage from "../shared/background-image";
import SplitTextCustom from "../shared/split-text-custom";
import BlurTextCustom from "../shared/blur-text-custom";
import MeguminAvatar from "../shared/megumin-avatar";
import ExplosionLottie from "../shared/explosion-effect-wrapper";

export default function HeroSection() {
    return (
        <section id="hero" className="relative bg-cover bg-center min-h-screen px-5 overflow-hidden">
            <BackgroundImage />
            <MeguminAvatar />
            <ExplosionLottie />

            <div className="max-w-5xl mx-auto w-full pt-10 flex flex-col gap-2 items-start min-h-svh">
                <SplitTextCustom text="MEGUMINE" />

                <BlurTextCustom text="Megumine is My Istri" showAfter={400} />
            </div>
        </section>
    )
}