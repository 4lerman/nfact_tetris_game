const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


for (let row = -2; row < 20; row++) {
	board[row] = [];

	for (let col = 0; col < 10; col++) {
		board[row][col] = 0;
	}
}

let count = 0;
let block = getNextBlock();
let error = null;
let gameOver = false;

function getRandomInt(min, max) {
	const range = max - min + 1;
	return Math.round(Math.random() * range) + min - 1;
}

function generateBlockSequence() {
	const figureSequence = ["stick", "square", "rT", "S", "Z", "L", "J"];
	const shuffledBlocks = shuffleArray(figureSequence);
	blockSequence.push(...shuffledBlocks);
}

function shuffleArray(array) {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = getRandomInt(0, array.length - 1)
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}
	return shuffledArray;
}


