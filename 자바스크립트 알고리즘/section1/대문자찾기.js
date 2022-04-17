function mySolution(str) {
  return str.split('').filter(s => {
    console.log(s.charAt());
    if (s.charCodeAt() > 64 && s.charCodeAt() < 91) {
      return s;
    }
  }).length;
}

console.log(mySolution('KoreaTimeGood'));
