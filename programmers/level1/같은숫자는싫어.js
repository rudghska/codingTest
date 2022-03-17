//나의 풀이
function solution(arr) {
  let ns = [];
  ns.push(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] || i === arr.length - 1) {
      continue;
    } else {
      ns.push(arr[i + 1]);
    }
  }
  return ns;
}

// 다른사람 풀이

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
