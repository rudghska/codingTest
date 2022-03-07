function solution(str) {
  if (str.length == 1) {
    return 1;
  }

  const arr = str.split('');
  let copyArr;
  let arr2 = [];
  const arr3 = [];

  for (let i = 1; i <= str.length / 2; i++) {
    copyArr = [...arr];
    while (copyArr.length !== 0) {
      arr2.push(copyArr.splice(0, i).join(''));
    }
    arr3.push(arr2);
    arr2 = [];
  }

  let count = 1;
  let result = '';
  for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3[i].length; j++) {
      if (arr3[i][j] == arr3[i][j + 1]) {
        count++;
      } else {
        if (count > 1) {
          result += count + arr3[i][j];
        } else {
          result += arr3[i][j];
        }
        count = 1;
      }
    }
    arr2.push(result);
    result = '';
  }

  return Math.min(...arr2.map(arr => arr.length));
}
