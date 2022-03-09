5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
function indexLocation(c, n) {
  let result = [];
  result.push((c % n) + 1);
  result.push(Math.floor(c / n) + 1);
  return result;
}

function same(n, word) {
  let w;
  let nextW;
  let count;
  let count1;
  let count2;
  for (let i = 0; i < word.length - 1; i++) {
    w = word[i];
    nextW = word[i + 1];
    if (w[w.length - 1] !== nextW[0]) {
      count1 = i + 1;
      break;
    }
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] == word[j]) {
        count2 = j;
      }
    }
  }

  if (!count1) count1 = count2;
  if (!count2) count2 = count1;
  count = Math.min(count1, count2);
  return count ? indexLocation(count, n) : count;
}

function solution(n, word) {
  const index = same(n, word);
  return index ? index : [0, 0];
}
