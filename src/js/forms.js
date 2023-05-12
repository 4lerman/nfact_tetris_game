const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

var blockSequence = [];
var board = [];

const blocks = {
	stick: [
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	L: [
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
	],
	J: [
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0],
	],
	square: [
		[1, 1],
		[1, 1],
	],
	S: [
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0],
	],
	Z: [
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0],
	],
	rT: [
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0],
	],
};

const colors = {
	stick: "cyan",
	square: "yellow",
	rT: "purple",
	S: "green",
	Z: "red",
	J: "blue",
	L: "orange",
};

function showGameOver() {
	cancelAnimationFrame(error);
	gameOver = true;
	context.fillStyle = "black";
	context.globalAlpha = 0.75;
	context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
	context.globalAlpha = 1;
	context.fillStyle = "white";
	context.font = "36px monospace";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
}
