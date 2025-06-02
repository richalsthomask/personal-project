import Image from "next/image";
import { useEffect, useState } from "react";

export default function Alien({
  xposition,
  yposition,
  visible,
  alienHeight,
  alienWidth,
}) {
  const [exploding, setExploding] = useState(false);

  useEffect(() => {
    if (!visible) {
      setExploding(true);
      setTimeout(() => {
        setExploding(false);
      }, 300); // Reset exploding state after 1 second
    }
  }, [visible]);
  return (
    <Image
      src={exploding ? "/explosion.png" : "/alien.png"}
      alt="Alien"
      width={100}
      height={100}
      className={`absolute duration-100 ${
        visible || exploding ? "" : "hidden"
      }`}
      style={{
        left: `${xposition}%`,
        top: `${yposition}%`,
        height: `${alienHeight}%`,
        width: `${alienWidth}%`,
      }}
    />
  );
}
