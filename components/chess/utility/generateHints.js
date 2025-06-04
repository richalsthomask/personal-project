export const generateHints = (cells, selectedIndex) => {
  const boardSize = 8;
  const inBounds = (x, y) => x >= 0 && x < boardSize && y >= 0 && y < boardSize;

  const getIndex = (x, y) => y * boardSize + x;

  const result = [];

  const cell = cells[selectedIndex];
  if (!cell.occupiend) return [];

  const { piece, color } = cell.occupiend;
  const startX = selectedIndex % boardSize;
  const startY = Math.floor(selectedIndex / boardSize);

  const enemyColor = color === "white" ? "black" : "white";

  const slide = (directions) => {
    for (const { x: dx, y: dy } of directions) {
      let x = startX + dx;
      let y = startY + dy;

      while (inBounds(x, y)) {
        const index = getIndex(x, y);
        const target = cells[index];

        if (!target.occupiend) {
          result.push(index);
        } else {
          if (target.occupiend.color === enemyColor) {
            result.push(index);
          }
          break;
        }

        x += dx;
        y += dy;
      }
    }
  };

  const jump = (moves) => {
    for (const { x: dx, y: dy } of moves) {
      const x = startX + dx;
      const y = startY + dy;
      if (inBounds(x, y)) {
        const index = getIndex(x, y);
        const target = cells[index];
        if (!target.occupiend || target.occupiend.color === enemyColor) {
          result.push(index);
        }
      }
    }
  };

  if (piece === "rook") {
    slide([
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ]);
  }

  if (piece === "bishop") {
    slide([
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
    ]);
  }

  if (piece === "queen") {
    slide([
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
    ]);
  }

  if (piece === "king") {
    jump([
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 },
    ]);
  }

  if (piece === "knight") {
    jump([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: -1, y: 2 },
      { x: -2, y: 1 },
      { x: 1, y: -2 },
      { x: 2, y: -1 },
      { x: -1, y: -2 },
      { x: -2, y: -1 },
    ]);
  }

  if (piece === "pawn") {
    const dir = color === "white" ? -1 : 1;
    const startRow = color === "white" ? 6 : 1;

    const oneStepY = startY + dir;
    const twoStepY = startY + 2 * dir;

    // Forward move
    if (inBounds(startX, oneStepY)) {
      const oneStepIndex = getIndex(startX, oneStepY);
      if (!cells[oneStepIndex].occupiend) {
        result.push(oneStepIndex);

        // Double move from start row
        if (startY === startRow && inBounds(startX, twoStepY)) {
          const twoStepIndex = getIndex(startX, twoStepY);
          if (!cells[twoStepIndex].occupiend) {
            result.push(twoStepIndex);
          }
        }
      }
    }

    // Diagonal captures
    for (const dx of [-1, 1]) {
      const x = startX + dx;
      const y = startY + dir;
      if (inBounds(x, y)) {
        const diagIndex = getIndex(x, y);
        const target = cells[diagIndex];
        if (target.occupiend && target.occupiend.color === enemyColor) {
          result.push(diagIndex);
        }
      }
    }
  }

  return result;
};
