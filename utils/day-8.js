import { readFromFile } from './read-from-file.js';

// PART 1
export const calculateDay8 = async () => {
  const trees = await readFromFile('day-8');
  let rawTreesArray = trees.split(/\r?\n/);
  const treesArray = rawTreesArray.map((tree) => {
    let temp = tree.split('');
    return temp.map((x) => parseInt(x));
  });

  let result = 0;

  for (let rowIndex = 0; rowIndex < treesArray.length; rowIndex++) {
    // const row = treesArray[rowIndex];
    let isVisibleFromLeft;
    let isVisibleFromRight;
    let isVisibleFromTop;
    let isVisibleFromBottom;
    for (
      let columnIndex = 0;
      columnIndex < treesArray[0].length;
      columnIndex++
    ) {
      // Calculate the edges
      if (
        rowIndex === 0 ||
        columnIndex === 0 ||
        rowIndex === treesArray.length - 1 ||
        columnIndex === treesArray[0].length - 1
      ) {
        result++;
      } else {
        isVisibleFromLeft = treesArray[rowIndex].find(
          (tempTree, index) =>
            index < columnIndex && tempTree >= treesArray[rowIndex][columnIndex]
        );
        isVisibleFromRight = treesArray[rowIndex].find(
          (tempTree, index) =>
            index > columnIndex && tempTree >= treesArray[rowIndex][columnIndex]
        );

        var tempTop = [];
        var tempBottom = [];
        for (let x = 0; x < treesArray.length; x++) {
          for (let y = 0; y < treesArray[0].length; y++) {
            if (x < rowIndex && y === columnIndex) {
              tempTop.push(treesArray[x][y]);
            }
            if (x > rowIndex && y === columnIndex) {
              tempBottom.push(treesArray[x][y]);
            }
          }
        }

        isVisibleFromTop = tempTop.find(
          (tempTree) => tempTree >= treesArray[rowIndex][columnIndex]
        );
        isVisibleFromBottom = tempBottom.find(
          (tempTree) => tempTree >= treesArray[rowIndex][columnIndex]
        );

        console.log('isVisibleFromLeft: ', isVisibleFromLeft);
        console.log('isVisibleFromRight: ', isVisibleFromRight);
        console.log('isVisibleFromTop: ', isVisibleFromTop);
        console.log('isVisibleFromBottom: ', isVisibleFromBottom);
        if (
          isVisibleFromLeft === undefined ||
          isVisibleFromRight === undefined ||
          isVisibleFromTop === undefined ||
          isVisibleFromBottom === undefined
        ) {
          result++;
        }
      }
    }
  }

  console.log('RESULT: ', result);
};

// PART 2
export const calculateDay8Part2 = async () => {
  const trees = await readFromFile('day-8');
  let rawTreesArray = trees.split(/\r?\n/);
  const treesArray = rawTreesArray.map((tree) => {
    let temp = tree.split('');
    return temp.map((x) => parseInt(x));
  });

  let result = 0;

  for (let rowIndex = 0; rowIndex < treesArray.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < treesArray[0].length;
      columnIndex++
    ) {
      var tempTop = [];
      var tempBottom = [];
      var tempLeft = [];
      var tempRight = [];
      var leftScore = 0;
      var rightScore = 0;
      var topScore = 0;
      var bottomScore = 0;
      var score = 0;

      tempLeft = treesArray[rowIndex].filter((_, index) => index < columnIndex);
      tempRight = treesArray[rowIndex].filter(
        (_, index) => index > columnIndex
      );

      for (let x = 0; x < treesArray.length; x++) {
        for (let y = 0; y < treesArray[0].length; y++) {
          if (x < rowIndex && y === columnIndex) {
            tempTop.push(treesArray[x][y]);
          }
          if (x > rowIndex && y === columnIndex) {
            tempBottom.push(treesArray[x][y]);
          }
        }
      }

      tempLeft.reverse();
      tempTop.reverse();

      leftScore =
        tempLeft.findIndex((x, i) => x >= treesArray[rowIndex][columnIndex]) ===
        -1
          ? tempLeft.length
          : tempLeft.findIndex(
              (x, i) => x >= treesArray[rowIndex][columnIndex]
            ) + 1;

      rightScore =
        tempRight.findIndex(
          (x, i) => x >= treesArray[rowIndex][columnIndex]
        ) === -1
          ? tempRight.length
          : tempRight.findIndex(
              (x, i) => x >= treesArray[rowIndex][columnIndex]
            ) + 1;

      topScore =
        tempTop.findIndex((x, i) => x >= treesArray[rowIndex][columnIndex]) ===
        -1
          ? tempTop.length
          : tempTop.findIndex(
              (x, i) => x >= treesArray[rowIndex][columnIndex]
            ) + 1;

      bottomScore =
        tempBottom.findIndex(
          (x, i) => x >= treesArray[rowIndex][columnIndex]
        ) === -1
          ? tempBottom.length
          : tempBottom.findIndex(
              (x, i) => x >= treesArray[rowIndex][columnIndex]
            ) + 1;

      score = leftScore * rightScore * topScore * bottomScore;
      if (score > result) {
        result = score;
      }
    }
  }

  console.log('RESULT: ', result);
};
