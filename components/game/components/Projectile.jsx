import { useEffect, useRef, useState } from "react";

export default function Projectile({
  xposition,
  alienPositions,
  removeAlien,
  alienHeight,
  alienWidth,
}) {
  const [yPosition, setYPosition] = useState(89);

  useEffect(() => {
    const interval = setInterval(() => {
      setYPosition((prev) => Math.max(prev - 1, 0));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check for collision with aliens
    alienPositions?.forEach((alien) => {
      if (
        xposition >= alien.x &&
        xposition <= alien.x + alienWidth &&
        yPosition <= alien.y + alienHeight &&
        yPosition >= alien.y &&
        alien.visible
      ) {
        setYPosition(0); // Reset projectile position if it hits an alien
        removeAlien(alien.x, alien.y); // Remove the alien
      }
    });
  }, [yPosition, alienPositions]);

  return (
    <div
      className={`absolute bg-white h-4 w-0.5 rounded-full duration-100 ${
        yPosition === 0 ? "hidden" : ""
      }`}
      style={{
        left: `${xposition + 1.35}%`,
        top: `${yPosition}%`,
      }}
    ></div>
  );
}
