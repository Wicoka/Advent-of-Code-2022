import { readFromFile } from './read-from-file.js';

// PART 1
export const getSumOfPriority = async () => {
  const contents = await readFromFile('day-3');
  const contentsArray = contents.split(/\r?\n/);
  let result = 0;
  contentsArray.forEach((content) => {
    const firstHalf = content.substring(0, content.length / 2).split('');
    const secondHalf = content.substring(content.length / 2).split('');

    const filteredArray = firstHalf.filter((value) =>
      secondHalf.includes(value)
    );

    result += getCharacterValue(filteredArray[0]);
    // console.log(content);
    // console.log(firstHalf);
    // console.log(secondHalf);
    // console.log('TEMP', temp);
  });
  console.log('RESULT: ', result);
};

const checkCharacterIsUpperCase = (character) =>
  character.toUpperCase() === character;

const getCharacterValue = (character) =>
  checkCharacterIsUpperCase(character)
    ? character.charCodeAt(0) - 38
    : character.charCodeAt(0) - 96;

// PART 2
export const getSumOfGroupPriority = async () => {
  const contents = await readFromFile('day-3');
  const contentsArray = contents.split(/\r?\n/);
  let result = 0;

  for (let index = 0; index < contentsArray.length - 2; index++) {
    if (index % 3 === 0 && index < contentsArray.length - 2) {
      const firstCharacterArray = contentsArray[index].split('');
      const secondCharacterArray = contentsArray[index + 1].split('');
      const thirdCharacterArray = contentsArray[index + 2].split('');

      // Check the first two array
      const filteredArray = firstCharacterArray.filter((value) =>
        secondCharacterArray.includes(value)
      );

      // Then check the third array with the common characters of the first two array
      const finalFilteredArray = filteredArray.filter((value) =>
        thirdCharacterArray.includes(value)
      );

      result += getCharacterValue(finalFilteredArray[0]);
    }
  }
  console.log('RESULT: ', result);
};
