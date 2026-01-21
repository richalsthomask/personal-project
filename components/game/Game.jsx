"use client";

import { useEffect, useRef, useState } from "react";
import Projectile from "./components/Projectile";
import Alien from "./components/Alien";
import { generateAliens } from "./utility/generateAliens";
import GameWonScreen from "./components/GameWonScreen";
import GameLostScreen from "./components/GameLostScreen";
import Image from "next/image";

const alienHeight = 4; // Height of the alien in percentage
const alienWidth = 3; // Width of the alien in percentage

export default function Game() {
  const [position, setPosition] = useState(50);
  const [projectiles, setProjectiles] = useState([]);
  const [alienPositions, setAlienPositions] = useState(generateAliens());
  const [alienDirection, setAlienDirection] = useState({ current: "right" });
  //right, down, left,down, right
  const [downKeys, setDownKeys] = useState([]);
  const [gameWinLoseStatus, setGameWinLoseStatus] = useState(null); //won || lost

  useEffect(() => {
    if (alienPositions.every((alien) => !alien.visible)) {
      setGameWinLoseStatus("won");
    }

    if (alienPositions.some((alien) => alien.y >= 85 && alien.visible)) {
      setGameWinLoseStatus("lost");
    }
  }, [alienPositions]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameWinLoseStatus) return; // Stop the game if it's won or lost
      if (alienDirection.current === "right") {
        setAlienPositions((prev) =>
          prev.map((alien) => ({
            ...alien,
            x: alien.x + 1,
          })),
        );
        if (
          alienPositions.some(
            (alien) => alien.x >= 98 - alienWidth && alien.visible,
          )
        ) {
          setAlienDirection({
            current: "down",
            next: "left",
            timeStamp: Date.now(),
          });
        }
      } else if (alienDirection.current === "down") {
        setAlienPositions((prev) =>
          prev.map((alien) => ({
            ...alien,
            y: alien.y + 1,
          })),
        );
        if (
          alienDirection.timeStamp &&
          Date.now() - alienDirection.timeStamp > 500
        ) {
          setAlienDirection({ current: alienDirection.next || "right" });
        }
      } else if (alienDirection.current === "left") {
        setAlienPositions((prev) =>
          prev.map((alien) => ({
            ...alien,
            x: alien.x - 1,
          })),
        );
        if (alienPositions.some((alien) => alien.x <= 2)) {
          setAlienDirection({
            current: "down",
            next: "right",
            timeStamp: Date.now(),
          });
        }
      }
    }, 100); // Adjust speed of alien movement
    return () => clearInterval(interval);
  }, [alienDirection, alienPositions]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameWinLoseStatus) return;
      setDownKeys((prev) =>
        !prev.includes(event.key) ? [...prev, event.key] : prev,
      );
      if (event.key === " ") {
        event.preventDefault(); // prevent page scrolling
      }
    };

    const handleKeyUp = (event) => {
      if (gameWinLoseStatus) return;
      setDownKeys((prev) => prev.filter((key) => key !== event.key));
      if (event.key === " ") {
        setProjectiles((prev) => [...prev, position]);
        event.preventDefault(); // prevent page scrolling
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [position]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameWinLoseStatus) return;
      if (downKeys.includes(" ")) {
        setPosition((position) => {
          setProjectiles((prev) => [...prev, position]);
          return position;
        });
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [downKeys]);

  useEffect(() => {
    if (downKeys.includes("ArrowLeft")) {
      setPosition((prev) => Math.max(prev - 1, 0));
    }
    if (downKeys.includes("ArrowRight")) {
      setPosition((prev) => Math.min(prev + 1, 98));
    }
    const interval = setInterval(() => {
      if (downKeys.includes("ArrowLeft")) {
        setPosition((prev) => Math.max(prev - 1, 0));
      }
      if (downKeys.includes("ArrowRight")) {
        setPosition((prev) => Math.min(prev + 1, 98));
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [downKeys]);

  return (
    <div
      style={{
        backgroundImage: "url('/space.png')",
        backgroundSize: "cover",
      }}
      className="h-screen w-full overflow-hidden bg-black"
    >
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {alienPositions.map((alien, index) => (
        <Alien
          key={index}
          xposition={alien.x}
          yposition={alien.y}
          {...{
            visible: alien.visible,
            alienHeight,
            alienWidth,
          }}
        />
      ))}
      {projectiles.map((xposition, index) => (
        <Projectile
          key={index}
          xposition={xposition + 1}
          removeAlien={(x, y) => {
            setAlienPositions((prev) =>
              prev.map((alien) =>
                alien.x === x && alien.y === y
                  ? { ...alien, visible: false }
                  : alien,
              ),
            );
          }}
          {...{ alienPositions, alienHeight, alienWidth }}
        />
      ))}
      <Image
        src="/ship.png"
        alt="Ship"
        width={100}
        height={100}
        className="absolute duration-100"
        style={{ left: `${position}%`, top: "90%", height: "7%", width: "5%" }}
      />

      {gameWinLoseStatus === "won" ? (
        <GameWonScreen
          onReply={() => {
            setGameWinLoseStatus(null);
            setAlienPositions(generateAliens());
            setProjectiles([]);
            setPosition(50);
            setAlienDirection({ current: "right" });
          }}
        />
      ) : gameWinLoseStatus === "lost" ? (
        <GameLostScreen
          onRetry={() => {
            setGameWinLoseStatus(null);
            setAlienPositions(generateAliens());
            setProjectiles([]);
            setPosition(50);
            setAlienDirection({ current: "right" });
          }}
        />
      ) : null}
      <Image
        src="/keys.png"
        alt="Logo"
        width={200}
        height={100}
        className="absolute right-2 bottom-2 z-10"
        style={{ height: "12%", width: "auto" }}
      />
    </div>
  );
}
