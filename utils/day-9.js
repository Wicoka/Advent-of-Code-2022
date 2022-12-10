import { readFromFile } from './read-from-file.js';

const inputs = await readFromFile('day-9');
let inputArray = inputs.split(/\r?\n/);
let directions = [];
let steps = [];
let result = 0;
let headLocation = { x: 0, y: 0 };
let tailLocation = { x: 0, y: 0 };
let steppedCoordinates = [];

// PART 1
export const calculateDay9 = async () => {
  // SEPARATE DIRECTIONS AND STEPS
  inputArray.forEach((input) => {
    const tempArray = input.split(' ');
    directions.push(tempArray[0]);
    steps.push(parseInt(tempArray[1]));
  });
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const step = steps[i];
    // console.log(direction, step);
    asd(step, direction, i);
    // console.log('headLocation:', headLocation);
    // console.log('tailLocation:', tailLocation);
  }
  const uniqueArray = steppedCoordinates.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.x === value.x && t.y === value.y)
  );
  // + 1 because of the starting point
  console.log(uniqueArray.length + 1);
};

// CALCULATE LOCATIONS
export const asd = (step, direction, i) => {
  // CALCULATE LOCATIONS

  // CASE: HEAD = TAIL
  if (headLocation.x === tailLocation.x && headLocation.y === tailLocation.y) {
    console.log('H=T', i);
    headStepWithDirection(step, direction);
    tailStepWithDirection(step - 1, direction);
    return;
  }
  if (
    // CASE: TOP HEAD
    headLocation.x === tailLocation.x &&
    headLocation.y === tailLocation.y + 1
  ) {
    console.log('TH', i);
    headStepWithDirection(step, direction);
    switch (direction) {
      case 'U':
        tailStepWithDirection(step, direction);
        break;
      case 'D':
        if (step > 2) tailStepWithDirection(step - 2, direction);
        break;
      case 'L':
      case 'R':
        if (step > 1) {
          tailStepWithDirection(1, 'U', false);
          tailStepWithDirection(step - 1, direction);
        }
        break;

      default:
        break;
    }
    return;
  }
  if (
    // CASE: BOTTOM HEAD
    headLocation.x === tailLocation.x &&
    headLocation.y === tailLocation.y - 1
  ) {
    console.log('BH', i);
    headStepWithDirection(step, direction);
    switch (direction) {
      case 'D':
        tailStepWithDirection(step, direction);
        break;
      case 'U':
        if (step > 2) tailStepWithDirection(step - 2, direction);
        break;
      case 'L':
      case 'R':
        if (step > 1) {
          tailStepWithDirection(1, 'D', false);
          tailStepWithDirection(step - 1, direction);
        }
        break;

      default:
        break;
    }
    return;
  }
  if (
    // CASE: RIGHT HEAD
    headLocation.x === tailLocation.x + 1 &&
    headLocation.y === tailLocation.y
  ) {
    console.log('RH', i);
    headStepWithDirection(step, direction);
    switch (direction) {
      case 'R':
        tailStepWithDirection(step, direction);
        break;
      case 'L':
        if (step > 2) tailStepWithDirection(step - 2, direction);
        break;
      case 'U':
      case 'D':
        if (step > 1) {
          tailStepWithDirection(1, 'R', false);
          tailStepWithDirection(step - 1, direction);
        }
        break;

      default:
        break;
    }
    return;
  }
  if (
    // CASE: LEFT HEAD
    headLocation.x === tailLocation.x - 1 &&
    headLocation.y === tailLocation.y
  ) {
    console.log('LH', i);
    headStepWithDirection(step, direction);
    switch (direction) {
      case 'L':
        tailStepWithDirection(step, direction);
        break;
      case 'R':
        if (step > 2) tailStepWithDirection(step - 2, direction);
        break;
      case 'U':
      case 'D':
        if (step > 1) {
          tailStepWithDirection(1, 'L', false);
          tailStepWithDirection(step - 1, direction);
        }
        break;

      default:
        break;
    }
    return;
  }
  if (
    // CASE: TOP RIGHT HEAD
    headLocation.x === tailLocation.x + 1 &&
    headLocation.y === tailLocation.y + 1
  ) {
    console.log('TRH', i);
    headStepWithDirection(step, direction);
    switch (direction) {
      case 'L':
        if (step > 2) {
          tailStepWithDirection(1, 'U', false);
          tailStepWithDirection(step - 2, direction);
        }
        break;
      case 'R':
        tailStepWithDirection(1, 'U', false);
        tailStepWithDirection(step, direction);
        break;
      case 'U':
        tailStepWithDirection(1, 'R', false);
        tailStepWithDirection(step, direction);
        break;
      case 'D':
        if (step > 2) {
          tailStepWithDirection(1, 'R', false);
          tailStepWithDirection(step - 2, direction);
        }
        break;

      default:
        break;
    }
    return;
  }
  // CASE: TOP LEFT HEAD
  if (
    headLocation.x === tailLocation.x - 1 &&
    headLocation.y === tailLocation.y + 1
  ) {
    console.log('TLH', i);
    headStepWithDirection(step, direction);
    switch (direction) {
      case 'R':
        if (step > 2) {
          tailStepWithDirection(1, 'U', false);
          tailStepWithDirection(step - 2, direction);
        }
        break;
      case 'L':
        tailStepWithDirection(1, 'U', false);
        tailStepWithDirection(step, direction);
        break;
      case 'U':
        tailStepWithDirection(1, 'L', false);
        tailStepWithDirection(step, direction);
        break;
      case 'D':
        if (step > 2) {
          tailStepWithDirection(1, 'L', false);
          tailStepWithDirection(step - 2, direction);
        }
        break;

      default:
        break;
    }
    return;
  }
  // CASE: BOTTOM RIGHT HEAD
  if (
    headLocation.x === tailLocation.x + 1 &&
    headLocation.y === tailLocation.y - 1
  ) {
    console.log('BRH', i);
    headStepWithDirection(step, direction);
    switch (direction) {
      case 'L':
        if (step > 2) {
          tailStepWithDirection(1, 'D', false);
          tailStepWithDirection(step - 2, direction);
        }
        break;
      case 'R':
        tailStepWithDirection(1, 'D', false);
        tailStepWithDirection(step, direction);
        break;
      case 'D':
        tailStepWithDirection(1, 'R', false);
        tailStepWithDirection(step, direction);
        break;
      case 'U':
        if (step > 2) {
          tailStepWithDirection(1, 'R', false);
          tailStepWithDirection(step - 2, direction);
        }
        break;

      default:
        break;
    }
    return;
  }
  // CASE: BOTTOM LEFT HEAD
  if (
    headLocation.x === tailLocation.x - 1 &&
    headLocation.y === tailLocation.y - 1
  ) {
    console.log('BLH', i);
    headStepWithDirection(step, direction);
    switch (direction) {
      case 'R':
        if (step > 2) {
          tailStepWithDirection(1, 'D', false);
          tailStepWithDirection(step - 2, direction);
        }
        break;
      case 'L':
        tailStepWithDirection(1, 'D', false);
        tailStepWithDirection(step, direction);
        break;
      case 'D':
        tailStepWithDirection(1, 'L', false);
        tailStepWithDirection(step, direction);
        break;
      case 'U':
        if (step > 2) {
          tailStepWithDirection(1, 'L', false);
          tailStepWithDirection(step - 2, direction);
        }
        break;

      default:
        break;
    }
    return;
  }
};

export const headStepWithDirection = (stepNumber, dir) => {
  switch (dir) {
    case 'U':
      headLocation.y = headLocation.y + stepNumber;
      break;
    case 'D':
      headLocation.y = headLocation.y - stepNumber;
      break;
    case 'L':
      headLocation.x = headLocation.x - stepNumber;
      break;
    case 'R':
      headLocation.x = headLocation.x + stepNumber;
      break;

    default:
      break;
  }
  // console.log('headLocation:', headLocation, stepNumber, dir);
};

export const tailStepWithDirection = (stepNumber, dir, add = true) => {
  if (add) {
    for (let i = 1; i < stepNumber + 1; i++) {
      switch (dir) {
        case 'U':
          steppedCoordinates.push({
            x: tailLocation.x,
            y: tailLocation.y + i,
          });
          break;
        case 'D':
          steppedCoordinates.push({
            x: tailLocation.x,
            y: tailLocation.y - i,
          });
          break;
        case 'R':
          steppedCoordinates.push({
            x: tailLocation.x + i,
            y: tailLocation.y,
          });
          break;
        case 'L':
          steppedCoordinates.push({
            x: tailLocation.x - i,
            y: tailLocation.y,
          });
          break;

        default:
          break;
      }
    }
  }
  switch (dir) {
    case 'U':
      tailLocation.y = tailLocation.y + stepNumber;
      break;
    case 'D':
      tailLocation.y = tailLocation.y - stepNumber;
      break;
    case 'R':
      tailLocation.x = tailLocation.x + stepNumber;
      break;
    case 'L':
      tailLocation.x = tailLocation.x - stepNumber;
      break;

    default:
      break;
  }
  // console.log('tailLocation:', tailLocation, stepNumber, dir);
};
