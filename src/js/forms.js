const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;


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

