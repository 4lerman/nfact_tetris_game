document.addEventListener("keydown", (e) => {
	if (gameOver) return;

	if (e.key == "ArrowLeft") {
		const col = block.col - 1;
		if (canMove(block.figure, block.row, col)) block.col = col;
	}
	if (e.key == "ArrowRight") {
		const col = block.col + 1;
		if (canMove(block.figure, block.row, col)) block.col = col;
	}

	if (e.key == "ArrowUp") {
		const rotatedFigure = rotate(block.figure);
		if (canMove(rotatedFigure, block.row, block.col))
			block.figure = rotatedFigure;
	}

	if (e.key == "ArrowDown") {
		const newRow = block.row + 1;
		if (!canMove(block.figure, newRow, block.col)) {
			block.row = newRow - 1;
			putBlock();
			return;
		}
		block.row = newRow;
	}
});
