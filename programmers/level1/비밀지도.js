function binary(size, arr) {
  const bbb = Array.from(Array(size), () => new Array(size));
  for (let i = 0; i < size; i++) {
    let b1 = arr[i].toString(2).split('');
    let length = b1.length;
    for (let j = 0; j < size; j++) {
      if (length + j < size) {
        b1.unshift('0');
      }
      bbb[i][j] = b1[j];
    }
  }
  return bbb;
}

function solution(n, arr1, arr2) {
  const b1 = binary(n, arr1);
  const b2 = binary(n, arr2);
  let bbb = [];
  let pound = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (parseInt(b1[i][j]) + parseInt(b2[i][j]) >= 1) {
        pound += '#';
        continue;
      }
      pound += ' ';
    }
    bbb[i] = pound;
    pound = '';
  }
  return bbb;
}
