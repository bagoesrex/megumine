import BlurText from "../react-bits/TextAnimations/BlurText/BlurText"
import BlurTextCustom from "./blur-text-custom"
import SplitTextCustom from "./split-text-custom"
import StoryCard from "./story-card"

type Props = {
    title: string,
    subtitle: string,
    description: string,
    index: number,
}

export default function StoryContent({ title, subtitle, description, index }: Props) {
    return (
        <div className="w-full">
            <SplitTextCustom text={title} />
            <BlurText
                text={subtitle}
                delay={10}
                animateBy="letters"
                direction="bottom"
                className="text-1xl leading-relaxed"
            />

            <div className={`flex w-full gap-4 ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="max-w-180 w-full">
                    <BlurTextCustom text={description} showAfter={400} />
                </div>
                <div className="max-w-150 flex flex-col gap-4">
                    <StoryCard imageUrl="/images/bg/megumin-bg.webp" />
                </div>
            </div>
        </div>
    )
}