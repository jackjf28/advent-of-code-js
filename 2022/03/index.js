import { getInput, splitLines } from "../../utils/index.js";

function getPriority(char) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.indexOf(char) + 1;
}

function processRucksack(rucksack) {
    const half = Math.ceil(rucksack.length/2);
    const con1 = rucksack.slice(0,half).trim().split('');
    const con2 = rucksack.slice(half).trim().split('');
    let commonChar;
    let isFound = false;
    for (let i = 0; i < con1.length; i++)
    {
        for (let j = 0; j < con2.length; j++)
        {
            if (con1[i] === con2[j])
            {
                isFound = true;
                commonChar = con1[i];
                break;
            }
        }
        if (isFound) {break;}
    }
    return getPriority(commonChar);
}

function getSumOfCommonItems(input) {
    let arr = splitLines(input);
    let sum = arr.reduce((acc,element) => acc + processRucksack(element),0);
    return sum; 
}

//every 3 rows corresponds to a 'group'
//find the common letter between three rows
/*
foreach line
 if idx+1%3 == 0:
    process current group
    clear group
 add row to group
*/

function* createGroupsOfThree(input) {
    let arr = splitLines(input);
    let group = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && i % 3 === 0) {
            yield group;
            group = [];
        }
        group.push(arr[i]);
    }
}

function getSumofGroupCommonItems(input) {
    const iterator = createGroupsOfThree(input);
    let group = iterator.next();
    while (!group.done) {
        console.log(group.value[1]);
        group = iterator.next()
    }
}
 

const input = getInput(import.meta.url);
const ans1 = getSumOfCommonItems(input);
const ans2 = getSumofGroupCommonItems(input);

console.log(`
Answer 1: ${ans1}
Answer 2: ${ans2}
`);
