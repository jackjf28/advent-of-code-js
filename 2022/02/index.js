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

const playerChoiceP2 = {
    'X': 0,
    'Y': 3,
    'Z': 6
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

function calculateRoundAns1(roundString) {
    let roundArr = roundString.split(' ');
    let result = determineWinner(roundArr[0], roundArr[1]);
    if (result > 0) {
        return playerChoice[roundArr[1]] + 6;
    }
    else if (result == 0) {
        return playerChoice[roundArr[1]] + 3;
    }
    else {
        return playerChoice[roundArr[1]];
    }
}

function determineChoice(opponent, player) {
    switch(player) {
        //lose
        case 'X':
            if(opponent == 'A'){
                return 3;
            }
            else if (opponent == 'B'){
                return 1;
            }
            else if (opponent == 'C'){
                return 2;
            }
        //draw 
        case 'Y':
            if(opponent == 'A'){
                return 1;
            }
            else if (opponent == 'B'){
                return 2;
            }
            else if (opponent == 'C'){
                return 3;
            }
        //win
        case 'Z':
            if(opponent == 'A'){
                return 2;
            }
            else if (opponent == 'B'){
                return 3;
            }
            else if (opponent == 'C'){
                return 1;
            }
    }

}

function calculateRoundAns2(roundString) {
    let roundArr = roundString.split(' ');
    return determineChoice(roundArr[0], roundArr[1]) + playerChoiceP2[roundArr[1]];
}

function processRounds(inputArr, callback) {
    let sum = 0;
    inputArr.forEach(ele => {
        if (ele.trim().length !== 0){
            sum += callback(ele);
        }
    });
    return sum;
}

const input = getInput(import.meta.url);
const inputArr = input.split(os.EOL);

const answer1 = processRounds(inputArr, calculateRoundAns1);

/*Part 2
 * X: need to lose
 * Y: need to draw
 * Z: need to win
*/

const answer2 = processRounds(inputArr, calculateRoundAns2);

console.log(`
    Answer 1: ${answer1}
    Answer 2: ${answer2}
`);
