import { readFromFile } from './read-from-file.js';

// PART 1
export const calculateDay6 = async () => {
  const code = await readFromFile('day-7');
  let movesArray = moves.split(/\r?\n/);
  const codeArray = code.split('');
  let result = [];

  console.log('RESULT: ', result);
};
