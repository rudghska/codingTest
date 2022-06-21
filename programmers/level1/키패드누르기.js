const xy = {
  1: { x: -1, y: 1 },
  2: { x: 0, y: 1 },
  3: { x: 1, y: 1 },
  4: { x: -1, y: 0 },
  5: { x: 0, y: 0 },
  6: { x: 1, y: 0 },
  7: { x: -1, y: -1 },
  8: { x: 0, y: -1 },
  9: { x: 1, y: -1 },
  0: { x: 0, y: -2 },
};

const left = [1, 4, 7];
const right = [3, 6, 9];
let currentLeft = { x: -1, y: -2 };
let currentRight = { x: 1, y: -2 };

function returnL(number) {
  currentLeft = xy[number];
  return 'L';
}

function returnR(number) {
  currentRight = xy[number];
  return 'R';
}

function getDistance(currentXY, numberXY) {
  let count = 0;
  if (currentXY === numberXY) {
    console.log(currentXY, numberXY);
    return count;
  }
  const bigNumber = currentXY > numberXY ? currentXY : numberXY;
  let i = currentXY > numberXY ? numberXY : currentXY;
  for (; i < bigNumber; i++) {
    count += 1;
  }
  return count;
}

function solution(numbers, hand) {
  const lrString = numbers.map(number => {
    if (left.includes(number)) {
      return returnL(number);
    }

    if (right.includes(number)) {
      return returnR(number);
    }
    const leftDistance =
      getDistance(currentLeft.x, xy[number].x) + getDistance(currentLeft.y, xy[number].y);
    const rightDistance =
      getDistance(currentRight.x, xy[number].x) + getDistance(currentRight.y, xy[number].y);

    if (leftDistance === rightDistance) {
      if (hand === 'right') {
        return returnR(number);
      }
      if (hand === 'left') {
        return returnL(number);
      }
    }

    if (leftDistance < rightDistance) {
      return returnL(number);
    } else {
      return returnR(number);
    }
  });
  currentLeft = { x: -1, y: -2 };
  currentRight = { x: 1, y: -2 };
  return lrString.join('');
}
