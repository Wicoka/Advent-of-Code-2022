import { readFromFile } from './read-from-file.js';
// A - X - Rock
// B - Y - Paper
// C - Z - Scissors
export const calculateWins = async () => {
  const rounds = await readFromFile('day-2');
  const roundsArray = rounds.split(/\r?\n/);
  let result = 0;

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

// A - X - Rock - Lose
// B - Y - Paper - Draw
// C - Z - Scissors - Win
// Rock - 1
// Paper - 2
// Scissors - 3
export const calculateHowNeedsToEnd = async () => {
  const rounds = await readFromFile('day-2');
  const roundsArray = rounds.split(/\r?\n/);
  let result = 0;

  roundsArray.forEach((round) => {
    // Lose case
    if (round.includes('X')) {
      result += 0;
      result += checkLoseWeapon(round);
    }
    // Draw case
    if (round.includes('Y')) {
      result += 3;
      result += checkDrawWeapon(round);
    }
    // Win case
    if (round.includes('Z')) {
      result += 6;
      result += checkWinWeapon(round);
    }
  });
  console.log('RESULT: ', result);
};

const checkWinWeapon = (round) => {
  // Win with Paper
  if (round.includes('A')) {
    return 2;
  }
  // Win with Scissors
  if (round.includes('B')) {
    return 3;
  }
  // Win with Rock
  if (round.includes('C')) {
    return 1;
  }
};

const checkDrawWeapon = (round) => {
  // Draw with Rock
  if (round.includes('A')) {
    return 1;
  }
  // Draw with Paper
  if (round.includes('B')) {
    return 2;
  }
  // Draw with Scissors
  if (round.includes('C')) {
    return 3;
  }
};

const checkLoseWeapon = (round) => {
  // Lose with Scissors
  if (round.includes('A')) {
    return 3;
  }
  // Lose with Rock
  if (round.includes('B')) {
    return 1;
  }
  // Lose with Paper
  if (round.includes('C')) {
    return 2;
  }
};
