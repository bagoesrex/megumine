import { useEffect } from "react";
import { useLottie } from "lottie-react";
import explosionAnimation from "@/public/animations/explosion.json";

const style = {
  height: 1100,
  width: 1100
};

const ExplosionLottie = () => {
  const { View, setSpeed } = useLottie({
    animationData: explosionAnimation,
    loop: false,
    autoplay: true,
  }, style);

  useEffect(() => {
    setSpeed(0.4);
  }, [setSpeed]);

  return View;
};

export default ExplosionLottie;
