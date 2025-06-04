export const generateChessBoard = () => {
  let cells = Array(64).fill({});
  const initialPositions = [
    { index: 0, occupiend: { color: "black", piece: "rook" } },
    { index: 1, occupiend: { color: "black", piece: "knight" } },
    { index: 2, occupiend: { color: "black", piece: "bishop" } },
    { index: 3, occupiend: { color: "black", piece: "queen" } },
    { index: 4, occupiend: { color: "black", piece: "king" } },
    { index: 5, occupiend: { color: "black", piece: "bishop" } },
    { index: 6, occupiend: { color: "black", piece: "knight" } },
    { index: 7, occupiend: { color: "black", piece: "rook" } },
    ...Array.from({ length: 8 }, (_, i) => ({
      index: i + 8,
      occupiend: { color: "black", piece: "pawn" },
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      index: i + 48,
      occupiend: { color: "white", piece: "pawn" },
    })),
    { index: 56, occupiend: { color: "white", piece: "rook" } },
    { index: 57, occupiend: { color: "white", piece: "knight" } },
    { index: 58, occupiend: { color: "white", piece: "bishop" } },
    { index: 59, occupiend: { color: "white", piece: "queen" } },
    { index: 60, occupiend: { color: "white", piece: "king" } },
    { index: 61, occupiend: { color: "white", piece: "bishop" } },
    { index: 62, occupiend: { color: "white", piece: "knight" } },
    { index: 63, occupiend: { color: "white", piece: "rook" } },
  ];
  initialPositions.forEach(({ index, occupiend }) => {
    cells[index] = { occupiend };
  });
  return cells;
};
