// 0: 상, 1: 하, 2: 좌, 3: 우
const MOVE = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// direction 방향으로 board를 벗어나거나 장애물(D)을 만나기 직전까지 이동 후 도착지점 반환
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

  // board 각 지점의 방문 여부를 저장할 2차원 배열
  const visited = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => false)
  );

  // BFS를 위한 queue
  const queue = [];

  // 시작점(R) 찾기
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (board[i][j] === "R") {
        queue.push({ pos: [i, j], move: 0 });
        break;
      }
    }
  }

  // BFS
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
