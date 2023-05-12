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
					cellR + j >= board.length ||
					board[i + cellR][j + cellC]
				) {
					return false;
				}
		}
	}
	return true;
}
