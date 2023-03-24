const DIRECTION = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

// 출발지점 구하기
const getStartPosition = (park) => {
  const [H, W] = [park.length, park[0].length];

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (park[i][j] === "S") return [i, j];
    }
  }
};

// 정해진 방향으로 한칸씩 움직이다가 범위를 벗어나거나 장애물을 마주칠 경우 false를 반환, 그렇지 않으면 도착지점 반환
const move = (park, currentPosition, op, moveCnt) => {
  const [H, W] = [park.length, park[0].length];
  let [CR, CC] = currentPosition;

  for (let i = 0; i < moveCnt; i++) {
    const [NR, NC] = [CR + DIRECTION[op][0], CC + DIRECTION[op][1]];
    if (NR < 0 || NR >= H || NC < 0 || NC >= W || park[NR][NC] === "X")
      return false;
    [CR, CC] = [NR, NC];
  }

  return [CR, CC];
};

function solution(park, routes) {
  let [CR, CC] = getStartPosition(park);

  routes.forEach((route) => {
    const [op, moveCnt] = route.split(" ");
    const moveResult = move(park, [CR, CC], op, moveCnt);
    if (moveResult) [CR, CC] = moveResult;
  });

  return [CR, CC];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
