export const findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);
