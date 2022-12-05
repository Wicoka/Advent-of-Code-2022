// const fs = require('fs');
import * as fs from 'fs';

export const readFromFile = (fileName) => {
  return fs.readFileSync(`./inputs/${fileName}.txt`, {
    encoding: 'utf8',
  });
};
