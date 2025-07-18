"use client";

import { useEffect, useState } from "react";
import Masonry from "../react-bits/Components/Masonry/Masonry";

type Item = {
    id: string;
    img: string;
    url: string;
    height: number;
}

type Props = {
    items: Item[];
    showAfter?: number;
};

export default function MasonryGrid({ items, showAfter = 0 }: Props) {
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
        <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
        />
    );
}
