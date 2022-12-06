import { readFromFile } from './read-from-file.js';
// A - X - Rock
// B - Y - Paper
// C - Z - Scissors
export const calculateWins = async () => {
  const rounds = await readFromFile('day-2');
  const roundsArray = rounds.split(/\r?\n/);
  let result = 0;
  console.log(roundsArray);
  roundsArray.forEach((round) => {
    if (checkWin(round)) result += 6;
    if (checkDraw(round)) result += 3;
    if (checkLose(round)) result += 0;
    if (round.includes('X')) result += 1;
    if (round.includes('Y')) result += 2;
    if (round.includes('Z')) result += 3;
  });
  console.log('RESULT: ', result);
};

const checkWin = (round) =>
  (round.includes('A') && round.includes('Y')) ||
  (round.includes('B') && round.includes('Z')) ||
  (round.includes('C') && round.includes('X'));

const checkLose = (round) =>
  (round.includes('A') && round.includes('Z')) ||
  (round.includes('B') && round.includes('X')) ||
  (round.includes('C') && round.includes('Y'));

const checkDraw = (round) =>
  (round.includes('A') && round.includes('X')) ||
  (round.includes('B') && round.includes('Y')) ||
  (round.includes('C') && round.includes('Z'));
