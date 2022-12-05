import { readFromFile } from './read-from-file.js';

export const calculateCalories = async () => {
  const calories = await readFromFile('day-1');
  const caloriesArray = calories.split(/\r?\n/);
  let result = 0;
  let tempResult = 0;
  caloriesArray.forEach((cal) => {
    if (cal === '') {
      if (tempResult > result) {
        result = tempResult;
      }
      tempResult = 0;
    }
    if (cal !== '') {
      const calNumb = +cal;
      tempResult += calNumb;
    }
  });
  console.log('RESULT: ', result);
};

export const calculateTopTgreeCalories = async () => {
  const calories = await readFromFile('day-1');
  const caloriesArray = calories.split(/\r?\n/);
  let result = 0;
  let tempResult = 0;
  let first = 0;
  let second = 0;
  let third = 0;
  caloriesArray.forEach((cal) => {
    const calNumb = +cal;
    if (cal === '') {
      if (tempResult > first) {
        // This order of assignment is important
        third = second;
        second = first;
        first = tempResult;
        console.log('asd');
      } else if (tempResult > second && tempResult != first) {
        third = second;
        second = tempResult;
      } else if (tempResult > third && tempResult != second) {
        third = tempResult;
      }
      tempResult = 0;
    }
    if (cal !== '') {
      tempResult += calNumb;
    }
  });
  result = first + second + third;
  console.log('first ', first);
  console.log('second ', second);
  console.log('third ', third);
  console.log('RESULT: ', result);
};
