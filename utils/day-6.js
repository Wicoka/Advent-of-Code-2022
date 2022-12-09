import { findDuplicates } from './find-duplicates.js';
import { readFromFile } from './read-from-file.js';

// PART 1
export const calculateDay6 = async () => {
  const code = await readFromFile('day-6');
  // let movesArray = moves.split(/\r?\n/);
  const codeArray = code.split('');
  let investigatedArray = [];
  let result = [];
  codeArray.forEach((x, i) => {
    investigatedArray.push(codeArray[i]);
    investigatedArray.push(codeArray[i + 1]);
    investigatedArray.push(codeArray[i + 2]);
    investigatedArray.push(codeArray[i + 3]);
    // PART 2
    investigatedArray.push(codeArray[i + 4]);
    investigatedArray.push(codeArray[i + 5]);
    investigatedArray.push(codeArray[i + 6]);
    investigatedArray.push(codeArray[i + 7]);
    investigatedArray.push(codeArray[i + 8]);
    investigatedArray.push(codeArray[i + 9]);
    investigatedArray.push(codeArray[i + 10]);
    investigatedArray.push(codeArray[i + 11]);
    investigatedArray.push(codeArray[i + 12]);
    investigatedArray.push(codeArray[i + 13]);
    if (findDuplicates(investigatedArray).length === 0) {
      result.push(i);
    }
    investigatedArray = [];
  });

  // let test1 = ['a', 'b', 'c', 'b'];
  // let test2 = ['a', 'b', 'c', 'd'];
  // console.log(findDuplicates(test1));
  // console.log(findDuplicates(test2));

  console.log('RESULT: ', result[0] + 4);

  // PART 2
  console.log('RESULT: ', result[0] + 14);
};
