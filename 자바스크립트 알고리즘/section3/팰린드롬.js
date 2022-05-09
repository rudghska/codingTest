function mySolution(str) {
  const result = str.replace(/[^a-zA-Z]/g, '');
  return result.toLowerCase().split('').reverse().join('') === result.toLowerCase() ? 'YES' : 'NO';
}

mySolution('found7, time: study; Yduts; emit, 7Dnuof');
