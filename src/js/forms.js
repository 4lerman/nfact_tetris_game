let blockSequence = [];
let board = [];

let count = 0;
let fRate = null;
let gameOver = false;

const blocks = {
	'stick': [
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	'L': [
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
	],
	'J': [
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0],
	],
	'square': [
		[1, 1],
		[1, 1],
	],
	'S': [
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0],
	],
	'Z': [
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0],
	],
	'rT': [
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0],
	],
};

const colors = {
	'stick': "cyan",
	'square': "yellow",
	'rT': "purple",
	'S': "green",
	'Z': "red",
	'J': "blue",
	'L': "orange",
};

function showGameOver() {
	cancelAnimationFrame(fRate);
	gameOver = true;
	gameStarted = false;
	ctx.fillStyle = "black";
	ctx.globalAlpha = 0.75;
	ctx.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
	ctx.globalAlpha = 1;
	ctx.fillStyle = "white";
	ctx.font = "36px monospace";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
	
	soundPlay('tetris-assets/sounds/Gameover.wav')

}
