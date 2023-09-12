//Day 2: Rock Paper Scissors
import { getInput } from "../../utils/index.js";
import os from 'os';
/*
First Col A: Rock, B: Paper, C: Scissors
Second Col X: Rock, Y: Paper, Z:Scissors
Score Calculations:
    Rock: 1
    Paper: 2
    Scissors: 3

    Lost: 0
    Draw: 3
    Win: 6
*/

const playerChoice = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

function determineWinner(opponent, player) {
    switch(opponent){
        case 'A':
            if (playerChoice[player] == 1) {
                return 0;
            }
            else if (playerChoice[player] == 2) {
                return 1;
            }
            else {
                return -1;
            }
        case 'B':
            if (playerChoice[player] == 1) {
                return -1;
            }
            else if (playerChoice[player] == 2) {
                return 0;
            }
            else {
                return 1;
            }
        case 'C':
            if (playerChoice[player] == 1) {
                return 1;
            }
            else if (playerChoice[player] == 2) {
                return -1;
            }
            else {
                return 0;
            }
    }
}

function calculateRound(roundString) {
    let roundArr = roundString.split(' ');
    let result = determineWinner(String(roundArr[0]), String(roundArr[1]));
    if (result > 0) {
        return Number(playerChoice[roundArr[1]]) + 6;
    }
    else if (result == 0) {
        return Number(playerChoice[roundArr[1]]) + 3;
    }
    else {
        return Number(playerChoice[roundArr[1]]);
    }
}

function processRounds(inputArr) {
    let sum = 0;
    inputArr.forEach(element => {
        if (element.trim().length !== 0){
            sum += calculateRound(element);
        }
    });
    return sum;
}

const input = getInput(import.meta.url);
let inputArr = input.split(os.EOL);

let answer = processRounds(inputArr);

console.log(`
    Answer: ${answer}
`);
