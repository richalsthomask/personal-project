export const generateAliens = () => {
  const aliens = [];
  const rows = 4; // Number of rows of aliens
  const cols = 8; // Number of columns of aliens
  const spacingX = 9; // Horizontal spacing between aliens
  const spacingY = 8; // Vertical spacing between aliens

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * spacingX + spacingX; // Center the aliens horizontally
      const y = row * spacingY + spacingY; // Center the aliens vertically
      aliens.push({
        x: x,
        y: y,
        visible: true,
      });
    }
  }

  return aliens;
};
