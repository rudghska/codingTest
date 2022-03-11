function solution(s) {
  const stack = [];
  for (const a of s) {
    if (stack.length === 0 || stack[stack.length - 1] !== a) {
      stack.push(a);
    } else {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}
