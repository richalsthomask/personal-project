import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = { BOX: "box" };

export default function Cell({
  cell,
  index,
  selectedCell,
  handleOnclick,
  handleDrag,
}) {
  const selectedCellRef = useRef(selectedCell);

  useEffect(() => {
    selectedCellRef.current = selectedCell;
  }, [selectedCell]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const [{}, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => handleDrag(index, true),
    // collect: (monitor) => ({
    //   isOver: monitor.isOver(),
    // }),
  }));

  useEffect(() => {
    if (isDragging) {
      handleDrag(index, true);
      document.body.style.cursor = "grabbing";
    } else {
      document.body.style.cursor = "default";
    }
  }, [isDragging]);

  return (
    <div
      ref={drop}
      className={`w-full h-full flex items-center justify-center 
                    ${
                      cell.occupiend ||
                      selectedCell?.futureMoves?.includes(index)
                        ? "cursor-pointer"
                        : "cursor-default"
                    }
                    ${
                      (Math.floor(index / 8) + index) % 2 === 0
                        ? "bg-[#eeeed2]"
                        : "bg-[#769656]"
                    }`}
      onClick={() => {
        handleOnclick(index);
      }}
    >
      {selectedCell?.current === index && (
        <div className="w-20 h-20 blur-xs rounded-full bg-blue-400 absolute" />
      )}

      {selectedCell?.futureMoves?.includes(index) &&
        (cell.occupiend ? (
          <div className="w-20 h-20 blur-xs rounded-full bg-red-400 absolute" />
        ) : (
          <div
            className={
              "w-20 h-20 rounded-full border-8 absolute " +
              ((Math.floor(index / 8) + index) % 2 === 0
                ? "border-[#769656]"
                : "border-[#eeeed2]")
            }
          />
        ))}
      {cell.occupiend ? (
        <Image
          ref={drag}
          width={100}
          height={100}
          src={`/chess pieces/${cell.occupiend.color}-${cell.occupiend.piece}.png`}
          alt={`${cell.occupiend.color} ${cell.occupiend.piece}`}
          className={`relative z-10 w-5/6 max-w-28 ${
            cell.occupiend
              ? "hover:scale-110 transition-transform duration-200"
              : ""
          } `}
        />
      ) : (
        <div className="w-12 h-12" />
      )}
    </div>
  );
}
