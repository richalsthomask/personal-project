"use client";

import Chess from "@/components/chess/Chess";
import Game from "@/components/game/Game";
import Resume from "@/components/Resume";
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-300">
      <Game />
      <Resume />
      {screenWidth > 1000 && <Chess />}
    </div>
  );
}
