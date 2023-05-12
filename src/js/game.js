const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

var tetrominoSequence = [];
var playfield = [];

for (let row = -2; row < 20; row++) {
	playfield[row] = [];

	for (let col = 0; col < 10; col++) {
		playfield[row][col] = 0;
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
	const blockSequence = ["stick", "square", "rT", "S", "Z", "L", "J"];
	const shuffledBlocks = shuffleArray(blockSequence);
	tetrominoSequence.push(...shuffledBlocks);
}

function shuffleArray(array) {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = (getRandomInt(0, array.length - 1)[
			(shuffledArray[i], shuffledArray[j])
		] = [shuffledArray[j], shuffledArray[i]]);
	}
	return shuffledArray;
}

function getNextBlock() {
	if (tetrominoSequence.length === 0) {
		generateBlockSequence();
	}

	const blockName = tetrominoSequence.pop();
	const figure = blocks[blockName];

	const fieldWidth = playfield[0].length;
	const matrixWidth = matrix[0].length;
	const col = Math.floor((fieldWidth - matrixWidth) / 2);

    const row = blockName === 'I' ? -1 : -2;

    return new blockInfo(blockName, figure, col, row);
}

