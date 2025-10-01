import React, { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { generateChessBoard } from "./utility/generateChessBoard";
import Image from "next/image";
import { generateHints } from "./utility/generateHints";
import GameOverScreen from "./components/GameOverScreen";
import Cell from "./components/Cell";

export default function Chess() {
  const [cells, setCells] = useState(generateChessBoard());
  const [selectedCell, setSelectedCell] = useState(null);
  const [turn, setTurn] = useState("white");
  const [gameOverScreen, setGameOverScreen] = useState(false);
  const [capturedPieces, setCapturedPieces] = useState({
    white: [],
    black: [],
  });

  const handleOnclick = useCallback(
    (index, alwaysShowMoves) => {
      let tempSelectedCell = selectedCell;
      setSelectedCell((prev) => {
        tempSelectedCell = prev;
        return prev;
      });
      if (tempSelectedCell?.futureMoves?.includes(index)) {
        let tempCells = cells;
        setCells((prevCells) => {
          tempCells = [...prevCells];
          return prevCells;
        });
        setTurn((prev) => (prev === "white" ? "black" : "white"));
        if (
          tempCells[index].occupiend &&
          tempCells[index].occupiend.piece === "king"
        ) {
          setGameOverScreen(
            tempCells[index].occupiend.color === "white" ? "black" : "white"
          );
        }
        setCells((prevCells) => {
          const newCells = [...prevCells];
          newCells[tempSelectedCell.current] = { occupiend: null };
          newCells[index] = {
            occupiend: {
              color: prevCells[tempSelectedCell.current].occupiend?.color,
              piece: prevCells[tempSelectedCell.current].occupiend?.piece,
            },
          };
          return newCells;
        });
        if (cells[index].occupiend) {
          setCapturedPieces((prev) => ({
            ...prev,
            [cells[index].occupiend?.color]: [
              ...prev[cells[index].occupiend?.color],
              cells[index].occupiend?.piece,
            ],
          }));
        }
        setSelectedCell(null);
        return;
      }
      if (!cells[index].occupiend) return;
      if (cells[index].occupiend.color !== turn) return;
      setSelectedCell(
        selectedCell?.current === index && !alwaysShowMoves
          ? null
          : { current: index, futureMoves: generateHints(cells, index) }
      );
    },
    [cells, selectedCell, turn]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full h-screen flex relative">
        {gameOverScreen && (
          <GameOverScreen
            winner={gameOverScreen}
            onRestart={() => {
              setCells(generateChessBoard());
              setSelectedCell(null);
              setTurn("white");
              setGameOverScreen(false);
              setCapturedPieces({ white: [], black: [] });
            }}
          />
        )}
        <div className="h-full w-40 flex flex-col items-center justify-start">
          {capturedPieces.white.map((piece, index) => (
            <Image
              key={index}
              width={60}
              height={60}
              src={`/chess pieces/white-${piece}.png`}
              alt={`White ${piece}`}
            />
          ))}
        </div>
        <div className="flex-grow w-full grid grid-cols-8 grid-rows-8 shadow border-4 border-black">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              cell={cell}
              index={index}
              selectedCell={selectedCell}
              handleOnclick={handleOnclick}
              handleDrag={(index) => handleOnclick(index, true)}
            />
          ))}
        </div>
        <div className="h-full w-40 flex flex-col items-center justify-end">
          {capturedPieces.black.map((piece, index) => (
            <Image
              key={index}
              width={60}
              height={60}
              src={`/chess pieces/black-${piece}.png`}
              alt={`Black ${piece}`}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
