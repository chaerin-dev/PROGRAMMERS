// 0: 상, 1: 하, 2: 좌, 3: 우
const MOVE = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const move = (board, currentPosition, direction) => {
  const [ROWS, COLS] = [board.length, board[0].length];

  let [CR, CC] = currentPosition;

  while (true) {
    const [NR, NC] = [CR + MOVE[direction][0], CC + MOVE[direction][1]];
    if (NR < 0 || NR >= ROWS || NC < 0 || NC >= COLS || board[NR][NC] === "D")
      return [CR, CC];
    [CR, CC] = [NR, NC];
  }
};

function solution(board) {
  const [ROWS, COLS] = [board.length, board[0].length];

  const visited = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => false)
  );

  const queue = [];

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (board[i][j] === "R") {
        queue.push({ pos: [i, j], move: 0 });
        break;
      }
    }
  }

  // bfs
  while (true) {
    const {
      pos: [CR, CC],
      move: currentMove,
    } = queue.shift();

    visited[CR][CC] = true;

    for (let i = 0; i < 4; i++) {
      const [NR, NC] = move(board, [CR, CC], i);
      if (visited[NR][NC]) continue;
      queue.push({ pos: [NR, NC], move: currentMove + 1 });
    }

    if (queue.length === 0) return -1;
    if (board[CR][CC] === "G") return currentMove;
  }
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));
