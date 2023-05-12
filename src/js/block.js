function blockInfo(name, figure, row, col) {
	this.name = name;
	this.figure = figure;
	this.row = row;
	this.col = col;
}

function rotate(figure) {
	const n = figure.length;
	const result = [];
	for (let i = 0; i < n; i++) {
		result[i] = [];
		for (let j = 0; j < n; j++) {
			result[i][j] = figure[n - j - 1][i];
		}
	}
	return result;
}

function canMove(figure, cellR, cellC) {
	for (let i = 0; i < figure.length; i++) {
		for (let j = 0; j < figure.length; j++) {
			if (figure[i][j])
				if (
					cellC + j < 0 ||
					cellC + j >= board[0].length ||
					cellR + i >= board.length ||
					board[i + cellR][j + cellC]
				) {
					return false;
				}
		}
	}
	return true;
}

function getNextBlock() {
	if (tetrominoSequence.length === 0) {
		generateBlockSequence();
	}

	const blockName = tetrominoSequence.pop();
	const figure = blocks[blockName];

	const fieldWidth = board[0].length;
	const matrixWidth = matrix[0].length;
	const col = Math.floor((fieldWidth - matrixWidth) / 2);

    const row = blockName === 'I' ? -1 : -2;

    return new blockInfo(blockName, figure, col, row);
}


function putBlock() {
	for (let i = 0; i < block.matrix.length; i++) {
		for (let j = 0; j < block.matrix[i].length; j++) {
			if (block.matrix[i][j]) {
				// если край фигуры после установки вылезает за границы поля, то игра закончилась
				if (block.row + i < 0 || block.row + i >= board.length) {
					return showGameOver();
				}
				// если всё в порядке, то записываем в массив игрового поля нашу фигуру
				playfield[block.row + i][block.col + j] = block.name;
			}
		}
	}

    cleanLine();

    block = getNextBlock();
}

function cleanLine() {
    for (let rowIndex = board.length - 1; rowIndex >= 0; ) {
        // check if the row is completely filled
        if (board[rowIndex].every(cell => !!cell)) {
          // clear the row and move everything above it down by one cell
          for (let r = rowIndex; r >= 0; r--) {
            for (let c = 0; c < board[r].length; c++) {
              board[r][c] = r === 0 ? 0 : board[r-1][c];
            }
          }
        }
        else {
          // move on to the next row
          rowIndex--;
        }
      }      
}