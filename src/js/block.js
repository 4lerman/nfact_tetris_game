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
	if (blockSequence.length === 0) {
		generateBlockSequence();
	}

	const blockName = blockSequence.pop();
	const figure = blocks[blockName];

	const fieldWidth = board[0].length;
	const matrixWidth = matrix[0].length;
	const col = Math.floor((fieldWidth - matrixWidth) / 2);

	const row = blockName === "stick" ? -1 : -2;

	return new blockInfo(blockName, figure, col, row);
}

function putBlock() {
	for (let i = 0; i < block.matrix.length; i++) {
		for (let j = 0; j < block.matrix[i].length; j++) {
			if (block.matrix[i][j]) {
				if (block.row + i < 0 || block.row + i >= board.length) {
					return showGameOver();
				}
				board[block.row + i][block.col + j] = block.name;
			}
		}
	}

	cleanLine();

	block = getNextBlock();
}

function cleanLine() {
	let isRowFilled = true;
	for (let cell of board[rowIndex]) {
		if (!cell) {
			isRowFilled = false;
			break;
		}
	}
	if (isRowFilled) {
		for (let i = rowIndex; i >= 0; i--) {
			for (let j = 0; j < board[i].length; j++) {
				board[i][j] = i === 0 ? 0 : board[i - 1][j];
			}
		}
	} else {
		rowIndex--;
	}
}
