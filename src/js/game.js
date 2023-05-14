const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const grid = 32;
let gameStarted = false;
let block = getNextBlock();

function getRandomInt(min, max) {
	const range = max - min + 1;
	return Math.round(Math.random() * range) + min - 1;
}

function generateBlockSequence() {
	const figureSequence = ["stick", "square", "rT", "S", "Z", "L", "J"];

	while (figureSequence.length) {
		const rand_figure = getRandomInt(0, figureSequence.length - 1);
		const figure = figureSequence.splice(rand_figure, 1)[0];
		blockSequence.push(figure);
	}
}

function loop() {
	fRate = requestAnimationFrame(loop);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let row = 0; row < 20; row++) {
		for (let col = 0; col < 10; col++) {
			if (board[row][col]) {
				const name = board[row][col];
				ctx.fillStyle = colors[name];

				ctx.fillRect(col * grid, row * grid, grid - 1, grid - 1);
			}
		}
	}

	if (block) {
		if (++count > 30) {
			block.row++;
			count = 0;

			if (!canMove(block.figure, block.row, block.col)) {
				block.row--;
				putBlock();
			}
		}

		ctx.fillStyle = colors[block.name];

		for (let row = 0; row < block.figure.length; row++) {
			for (let col = 0; col < block.figure[row].length; col++) {
				if (block.figure[row][col]) {
					ctx.fillRect(
						(block.col + col) * grid,
						(block.row + row) * grid,
						grid - 1,
						grid - 1
					);
				}
			}
		}
	}
}

function play() {
	if (!gameStarted) {
        if(gameOver) resetGame();
        gameStarted = true;
		fRate = requestAnimationFrame(loop);
	}
}

function resetGame() {
    blockSequence = [];
    board = [];
    
    count = 0;
    fRate = null;
    gameOver = false;
	ctx.clearRect(0, 0, canvas.width, canvas.height);


    for (let row = -2; row < 20; row++) {
        board[row] = [];
    
        for (let col = 0; col < 10; col++) {
            board[row][col] = 0;
        }
    }

    block = getNextBlock();
}
