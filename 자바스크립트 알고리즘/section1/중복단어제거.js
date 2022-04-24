function mySolution(arr) {
  const answer = [];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[0] === arr[i]) {
      answer.push(arr.slice(0, 1)[0]);
      arr.splice(0, 1);
      arr.splice(i - 1, 1);
      i = 0;
    }
  }
  answer.push(arr[0]);
  return answer;
}

function solution(arr) {
  const answer = arr.filter((a, i) => arr.indexOf(a) === i);

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr.indexOf(arr[i]) === i) answer.push(arr[i]);
  //   }

  return answer;
}

console.log(mySolution(['good', 'apple', 'apple', 'good', 'study']));
console.log(solution(['good', 'apple', 'apple', 'good', 'study']));
