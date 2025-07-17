type Props = {
    imageUrl?: string;
    opacity?: number;
};

export default function BackgroundImage({
    imageUrl = "/images/bg/megumin-bg.webp",
    opacity = 0.4,
}: Props) {
    return (
        <div
            className="absolute inset-0 bg-cover bg-center -z-10"
            style={{
                backgroundImage: `url(${imageUrl})`,
                opacity,
            }}
        />
    );
}
