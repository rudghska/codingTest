function getDoll(borad, index) {
  let data;
  for (let i = 0; i < borad.length; i++) {
    if (borad[index - 1][i] !== 0) {
      data = borad[index - 1][i];
      borad[index - 1][i] = 0;
      return data;
    }
  }
}

function createColumFiled(board, columFiled) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      columFiled[i][j] = board[j][i];
    }
  }
}

function solution(board, moves) {
  const dolls = [];
  let count = 0;
  const fileds = Array.from(Array(board.length), () => new Array(board.length));
  let i = 0;

  createColumFiled(board, fileds);

  for (const index of moves) {
    const result = getDoll(fileds, index);
    if (result === undefined) continue;
    if (dolls.length > 0 && dolls[i - 1] === result) {
      dolls.pop();
      count++;
      i--;
    } else {
      dolls.push(result);
      i++;
    }
  }

  return count * 2;
}
