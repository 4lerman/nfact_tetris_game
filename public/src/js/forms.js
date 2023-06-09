let blockSequence = [];
let board = [];

let count = 0;
let fRate = null;
let gameOver = false;
let lines = document.querySelector('#lines');
let score = document.querySelector('#score');
let level = document.querySelector('#level')
let speed = 30;
let levelButtonClick = 0;
let bestScore = document.querySelector('#best_score');
let playButton = document.querySelector('#play_button')

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
	if(bestScore.innerHTML < score.innerHTML) {
		bestScore.innerHTML = score.innerHTML;
	}

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
