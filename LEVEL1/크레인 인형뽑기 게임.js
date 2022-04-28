function solution(board, moves) {
  let n = board.length;

  // 격자의 세로줄이 하나의 배열이 되도록 2차원 배열 방향 변경
  board = board.flat();
  let rotatedBoard = Array.from({ length: n }, (i) => []);
  for (let i = 0; i < board.length; i++) {
    if (board[i]) rotatedBoard[i % n].push(board[i]);
  }

  // moves 배열 순회하며 인형 꺼내서 stack에 집어넣기
  let stack = [];
  let cnt = 0;
  for (let move of moves) {
    let doll = rotatedBoard[move - 1].shift();
    if (doll === undefined) continue;
    if (stack[stack.length - 1] === doll) {
      stack.pop();
      cnt += 2;
    } else {
      stack.push(doll);
    }
  }

  return cnt;
}

/* 좋았던 다른 사람의 풀이 1:
아이디어는 나의 풀이와 완벽히 일치하지만, 코드가 더 간결하고 가독성이 높음.

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );
const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;
  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }
  return result;
};
*/

/* 좋았던 다른 사람의 풀이 2:
보드를 회전하지 않는 기본적인 풀이

function solution(board, moves) {
  var count = 0;
  var stack = [];
  for (var i = 0; i < moves.length; i++) {
    var now = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
}
*/
