import { readFromFile } from './read-from-file.js';

// PART 1
export const calculateFullyRange = async () => {
  const ranges = await readFromFile('day-4');
  let rangesArray = ranges.split(/\r?\n/);
  let result = 0;
  let arrayWithRanges = [];
  rangesArray.forEach((range) => {
    range = range.replace('-', ',');
    range = range.replace('-', ',');
    arrayWithRanges.push(range.split(','));
  });

  // convert them to numbers
  arrayWithRanges.forEach((arrayRange) => {
    arrayRange[0] = parseInt(arrayRange[0]);
    arrayRange[1] = parseInt(arrayRange[1]);
    arrayRange[2] = parseInt(arrayRange[2]);
    arrayRange[3] = parseInt(arrayRange[3]);
  });

  arrayWithRanges.forEach((arrayRange) => {
    if (
      (arrayRange[0] <= arrayRange[2] && arrayRange[1] >= arrayRange[3]) ||
      (arrayRange[0] >= arrayRange[2] && arrayRange[1] <= arrayRange[3])
    ) {
      console.log(arrayRange);
      result++;
    }
  });
  console.log('RESULT: ', result);
};

// PART 2
export const calculatePartlyRange = async () => {
  const ranges = await readFromFile('day-4');
  let rangesArray = ranges.split(/\r?\n/);
  let result = 0;
  let arrayWithRanges = [];
  rangesArray.forEach((range) => {
    range = range.replace('-', ',');
    range = range.replace('-', ',');
    arrayWithRanges.push(range.split(','));
  });

  // convert them to numbers
  arrayWithRanges.forEach((arrayRange) => {
    arrayRange[0] = parseInt(arrayRange[0]);
    arrayRange[1] = parseInt(arrayRange[1]);
    arrayRange[2] = parseInt(arrayRange[2]);
    arrayRange[3] = parseInt(arrayRange[3]);
  });
  // 2-4, 5-6
  // 5-6, 2-4
  // 7-76, 2-6
  arrayWithRanges.forEach((arrayRange) => {
    if (arrayRange[1] < arrayRange[2] || arrayRange[0] > arrayRange[3]) {
      // console.log(arrayRange);
      result++;
    }
  });
  result = rangesArray.length - result;

  console.log('RESULT: ', result);
};
