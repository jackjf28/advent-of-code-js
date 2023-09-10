import { getInput } from "../../utils/index.js";
const os = require('node:os');

//~\Development\advent-of-code-js> npm config set script-shell `C:\Program Files\nu\bin\nu.exe`
//async function getMaxCals(fileName) {
//	let sumValues = [];
//	let arr = [];
//	let sum = 0;
//	try {
//		const rl = readline.createInterface({
//			input: fs.createReadStream('./'+fileName),
//			crlfDelay: Infinity
//		});
//
//		rl.on('line', (line) => {
//			if (line.trim().length === 0) {
//				arr.forEach( num => {
//					sum += Number(num);
//				})
//				sumValues.push(sum);
//				sum = 0;
//				arr = [];
//			} else {
//				arr.push(line);
//			}
//		});
//		await events.once(rl, 'close');
//		console.log(`Max Cal Sum: ${Math.max(...sumValues)}`);
//	} catch (err) {
//		console.error(err);
//	}
//}

//async function getTop3MaxCals(fileName) {
//	let sumValues = [];
//	let arr = [];
//	let sum = 0;
//	try {
//		const rl = readline.createInterface({
//			input: fs.createReadStream('./'+fileName),
//			crlfDelay: Infinity
//		});
//
//		rl.on('line', (line) => {
//			if (line.trim().length === 0) {
//				arr.forEach( num => {
//					sum += Number(num);
//				})
//				sumValues.push(sum);
//				sum = 0;
//				arr = [];
//			} else {
//				arr.push(line);
//			}
//		});
//		await events.once(rl, 'close');
//		let sortedValues = sumValues.sort(function(a,b){return b - a});
//
//		console.log(`Top 3 values: ${sortedValues[0]} ${sortedValues[1]} ${sortedValues[2]}`);
//		let top3Sum = sortedValues[0] + sortedValues[1] + sortedValues[2];
//		console.log(`Top 3 sum: ${top3Sum}`);
//		
//	} catch (err) {
//		console.error(err);
//	}
//}

// credit for the answers below go to zsoltime's repo https://github.com/zsoltime/advent-of-code
const initialValue = 0;
const sum = (nums) => nums.reduce((a, b) => a + b, initialValue);

function getCaloriesByElves(input) {
	const arr = input.split(/\r?\n/);
	console.log(arr.length);
	return input
		.split(os.EOL)
		.map( (line) => line.split('\n').map(Number))
		.map(sum);
}

function getMaxCalories(input) {
	return Math.max(...getCaloriesByElves(input));
}

function getTopThreeCalories(input) {
	const top3 = getCaloriesByElves(input)
		.sort((a,b) => b - a)
		.slice(0,3);
	return sum(top3);
}
	

const input = getInput(import.meta.url);

const ans1 = getMaxCalories(input);

const ans2 = getTopThreeCalories(input);

console.log(`
	Answer One: ${ans1}
	Answer Two: ${ans2}
`);



//getMaxCals(input);

//getTop3MaxCals(fileName);

