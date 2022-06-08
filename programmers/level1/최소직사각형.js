function solution(sizes) {
  let h = [];
  let w = [];
  sizes
    .map(size => size.sort((a, b) => b - a))
    .map(size => {
      w.push(size[0]);
      h.push(size[1]);
    });

  return Math.max(...h) * Math.max(...w);
}
