"use client"

import { motion } from "framer-motion";
import { Card } from "../ui/card";

type Props = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

export default function FadeInCard({ children, delay = 0, className = "" }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            <Card className={`w-70 pt-1 pb-0 px-2 bg-primary/50 text-white border-primary ${className}`}>
                {children}
            </Card>
        </motion.div>
    );
}
