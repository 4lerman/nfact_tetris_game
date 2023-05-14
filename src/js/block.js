const blockInfo = {
	name: null,
	figure: null,
	col: null,
	row: null
}

for (let row = -2; row < 20; row++) {
	board[row] = [];

	for (let col = 0; col < 10; col++) {
		board[row][col] = 0;
	}
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
	const figureWidth = figure[0].length;
	const col = Math.floor((fieldWidth - figureWidth) / 2);

    const row = blockName === 'stick' ? -1 : -2;

	blockInfo.name = blockName;
	blockInfo.figure = figure;
	blockInfo.col = col;
	blockInfo.row = row;

	return blockInfo;
}


function putBlock() {
	for (let i = 0; i < block.figure.length; i++) {
		for (let j = 0; j < block.figure[i].length; j++) {
			if (block.figure[i][j]) {

				if (block.row + i < 0 || block.row + i >= board.length) {
					return showGameOver();
				}

				board[block.row + i][block.col + j] = block.name;
			}
		}
	}
	soundPlay('tetris-assets/sounds/Drop.wav');

    cleanLine();
    block = getNextBlock();
}

function cleanLine() {
    for (let rowIndex = board.length - 1; rowIndex >= 0; ) {
        let rowIsFilled = true;
        for (let c = 0; c < board[rowIndex].length; c++) {
          if (!board[rowIndex][c]) {
            rowIsFilled = false;
            break;
          }
        }
        if (rowIsFilled) {
          for (let r = rowIndex; r >= 0; r--) {
            for (let c = 0; c < board[r].length; c++) {
              board[r][c] = r === 0 ? 0 : board[r-1][c];
            }
          }
		  score.innerHTML = parseInt(score.innerHTML) + 100;
		  lines.innerHTML++;
		  soundPlay('tetris-assets/sounds/Lineclear.wav')
        } else {
          rowIndex--;
        }
      }     
}

function soundPlay(path) {
	let audio = new Audio(path)
	audio.play();
}