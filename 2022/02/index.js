//Day 2: Rock Paper Scissors
const events = require('events');
const fs = require("fs");
const readline = require('readline');


let fileIdx = process.argv.indexOf('--file');
let fileName;

function getFileName() {
	let fileName;
	try{
		if (fileIdx > -1) {
			fileName = process.argv[fileIdx + 1];
		}
		else {
			let message = "--file flage is required.";
			throw new Error(message);
		}
	}
	catch (err) {
		console.error(err);
	}
}

function doWork() {}

async function loadFile(fileName) {
	try {
		const rl = readline.createInterface({
			input: fs.createReadStream('./'+fileName),
			crlfDelay: Infinity
		});
		rl.on('line', (line) => {
			doWork();
			console.log(line);
		});
		await events.once(rl, 'close');
	} catch (err) {
		console.log(err);
	}

}

//First Col A: Rock, B: Paper, C: Scissors
//Second Col X: Rock, Y: Paper, Z:Scissors

fileName = getFileName();
