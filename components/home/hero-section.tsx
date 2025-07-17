import BackgroundImage from "../shared/background-image";
import SplitTextCustom from "../shared/split-text-custom";
import BlurTextCustom from "../shared/blur-text-custom";

export default function HeroSection() {
    return (
        <section id="hero" className="relative bg-cover bg-center min-h-screen px-5">
            <BackgroundImage />

            <div className="max-w-5xl mx-auto w-full py-10 flex flex-col gap-2 items-start">
                <SplitTextCustom text="MEGUMINE" />

                <BlurTextCustom text="Megumine is My Istri" showAfter={400} />
            </div>
        </section>
    )
}