function solution(lottos, win_nums) {
  let zeroCount = 0;
  let winCount = 0;
  lottos.forEach((item) => {
    if (item === 0) zeroCount++;
    else if (win_nums.includes(item)) winCount++;
  });
  let maxRank = Math.min(7 - (winCount + zeroCount), 6);
  let minRank = Math.min(7 - winCount, 6);
  return [maxRank, minRank];
}

/* 좋았던 다른 사람의 풀이:
1. 일차하는 번호의 수와 순위를 매칭하기 위해 rank 배열 사용
2. filter 메서드 사용
3. v가 0인 경우를 !v를 이용해 표현

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;
  let maxCount = minCount + zeroCount;
  return [rank[maxCount], rank[minCount]];
}
*/
