import { getInput, splitLines} from "../../utils/index.js"

/* 
Example: 20-45, 13-44
First elf assigned sections 20 through 45
Second elf assigned sections 13 through 44
Question: In how many assignment pairs does one one range fully contain the other?
*/

function sectionIsSubset(input) {
	// for comparing the two sections
	/**
	 * example 1-5,2-3
	 * if (s1.start < s2.start && s1.end > s2.end) || (s2.start < s1.start && s2.end > s1.end)
	 */
	if((+input[0][0] <= +input[1][0] && +input[0][1] >= +input[1][1]) || (+input[1][0] <= +input[0][0] && +input[1][1] >= +input[0][1])) {
		return 1;
	}
	return 0;
}

function splitSections(input) {
	return input.split(',')
				.map(item => item.split('-'));
}

function getNumberOfContainedSections(input) {
	return splitLines(input)
			.map(splitSections)
			.map(sectionIsSubset)
			.reduce((a,b) => a+b,0);
}

const input = getInput(import.meta.url);
const ans1 = getNumberOfContainedSections(input);
const ans2 = null;

console.log(`
	Answer 1: ${ans1}
	Answer 2: ${ans2}
`);