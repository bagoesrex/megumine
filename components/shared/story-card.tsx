import Image from "next/image";

type Props = {
    imageUrl: string;
};

export default function StoryCard({ imageUrl }: Props) {
    return (
        <div className="rounded-md overflow-hidden">
            <Image
                src={imageUrl}
                alt="Story Card"
                width={300}
                height={300}
                className="w-full object-cover"
            />
        </div>
    );
}
