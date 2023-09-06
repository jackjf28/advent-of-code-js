const events = require('events');
const fs = require("fs");
const readline = require('readline');

function loadFileName () {
	let fileIdx = process.argv.indexOf('--file');
	let fileName;

	try {
		if (fileIdx > -1) {
			fileName = process.argv[fileIdx + 1];
		}
		else {
			let message = "--file flag is required.\n  Usage: 'node calorie-counting.js --file <filename>'";
			throw new Error(message);
		}
	}
	catch (err) {
		console.error(err);
	}
	return fileName;
}

async function getMaxCals(fileName) {
	let sumValues = [];
	let arr = [];
	let sum = 0;
	try {
		const rl = readline.createInterface({
			input: fs.createReadStream('./'+fileName),
			crlfDelay: Infinity
		});

		rl.on('line', (line) => {
			if (line.trim().length === 0) {
				arr.forEach( num => {
					sum += Number(num);
				})
				sumValues.push(sum);
				sum = 0;
				arr = [];
			} else {
				arr.push(line);
			}
		});
		await events.once(rl, 'close');
		console.log(`Max Cal Sum: ${Math.max(...sumValues)}`);
	} catch (err) {
		console.error(err);
	}
}

async function getTop3MaxCals(fileName) {
	let sumValues = [];
	let arr = [];
	let sum = 0;
	try {
		const rl = readline.createInterface({
			input: fs.createReadStream('./'+fileName),
			crlfDelay: Infinity
		});

		rl.on('line', (line) => {
			if (line.trim().length === 0) {
				arr.forEach( num => {
					sum += Number(num);
				})
				sumValues.push(sum);
				sum = 0;
				arr = [];
			} else {
				arr.push(line);
			}
		});
		await events.once(rl, 'close');
		let sortedValues = sumValues.sort(function(a,b){return b - a});

		console.log(`Top 3 values: ${sortedValues[0]} ${sortedValues[1]} ${sortedValues[2]}`);
		let top3Sum = sortedValues[0] + sortedValues[1] + sortedValues[2];
		console.log(`Top 3 sum: ${top3Sum}`);
		
	} catch (err) {
		console.error(err);
	}
}
let fileName = loadFileName();

getMaxCals(fileName);

getTop3MaxCals(fileName);

