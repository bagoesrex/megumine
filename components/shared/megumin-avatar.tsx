type Props = {
    imageUrl?: string;
};

export default function MeguminAvatar({
    imageUrl = "/images/avatars/megumin-avatar.webp"
}: Props) {
    return (
        <div
            className="absolute bottom-0 right-0 -z-5 bg-cover bg-no-repeat w-[589px] h-[421px]"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
    );
}

