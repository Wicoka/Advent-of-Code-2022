import { readFromFile } from './read-from-file.js';

// PART 1
export const calculateSortedStacks = async () => {
  const moves = await readFromFile('day-5');
  let movesArray = moves.split(/\r?\n/);
  const initialState = [
    ['N', 'S', 'D', 'C', 'V', 'Q', 'T'],
    ['M', 'F', 'V'],
    ['F', 'Q', 'W', 'D', 'P', 'N', 'H', 'M'],
    ['D', 'Q', 'R', 'T', 'F'],
    ['R', 'F', 'M', 'N', 'Q', 'H', 'V', 'B'],
    ['C', 'F', 'G', 'N', 'P', 'W', 'Q'],
    ['W', 'F', 'R', 'L', 'C', 'T'],
    ['T', 'Z', 'N', 'S'],
    ['M', 'S', 'D', 'J', 'R', 'Q', 'H', 'N'],
  ];
  let state = initialState;
  let result = '';
  let arrayWithMoves = [];
  // Normalize the input
  movesArray.forEach((move) => {
    arrayWithMoves.push(move.split(' '));
  });

  // Separate the inputs
  let moveArray = [];
  let fromArray = [];
  let toArray = [];
  arrayWithMoves.forEach((step) => {
    moveArray.push(parseInt(step[1]));
    fromArray.push(parseInt(step[3]));
    toArray.push(parseInt(step[5]));
  });

  // Calculate boxes
  for (let index = 0; index < moveArray.length; index++) {
    const tempMove = moveArray[index];
    const tempFrom = fromArray[index];
    const tempTo = toArray[index];

    for (let i = 0; i < tempMove; i++) {
      state[tempTo - 1].push(state[tempFrom - 1].pop());
    }
  }

  // Get last letters
  state.forEach((x) => {
    result += x[x.length - 1];
  });

  console.log('RESULT: ', result);
};

// PART 2
export const calculateSortedStacks2 = async () => {
  const moves = await readFromFile('day-5');
  let movesArray = moves.split(/\r?\n/);
  const initialState = [
    ['N', 'S', 'D', 'C', 'V', 'Q', 'T'],
    ['M', 'F', 'V'],
    ['F', 'Q', 'W', 'D', 'P', 'N', 'H', 'M'],
    ['D', 'Q', 'R', 'T', 'F'],
    ['R', 'F', 'M', 'N', 'Q', 'H', 'V', 'B'],
    ['C', 'F', 'G', 'N', 'P', 'W', 'Q'],
    ['W', 'F', 'R', 'L', 'C', 'T'],
    ['T', 'Z', 'N', 'S'],
    ['M', 'S', 'D', 'J', 'R', 'Q', 'H', 'N'],
  ];
  let state = initialState;
  let result = '';
  let arrayWithMoves = [];
  // Normalize the input
  movesArray.forEach((move) => {
    arrayWithMoves.push(move.split(' '));
  });

  // Separate the inputs
  let moveArray = [];
  let fromArray = [];
  let toArray = [];
  arrayWithMoves.forEach((step) => {
    moveArray.push(parseInt(step[1]));
    fromArray.push(parseInt(step[3]));
    toArray.push(parseInt(step[5]));
  });

  // Calculate boxes
  for (let index = 0; index < moveArray.length; index++) {
    const tempMove = moveArray[index];
    const tempFrom = fromArray[index];
    const tempTo = toArray[index];
    let temporaryArray = [];

    for (let i = 0; i < tempMove; i++) {
      temporaryArray.push(state[tempFrom - 1].pop());
    }
    // To part 2 you only need to reverse the array what you would push into new array
    temporaryArray.reverse();
    temporaryArray.forEach((x) => {
      state[tempTo - 1].push(x);
    });
  }

  // Get last letters
  state.forEach((x) => {
    result += x[x.length - 1];
  });

  console.log('RESULT: ', result);
};
