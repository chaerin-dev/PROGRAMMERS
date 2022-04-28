function solution(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}

/* 좋았던 다른 사람의 풀이:
역발상!!! 여집합!!!
없는 숫자의 합 = 0부터 9까지 전체 합 - 있는 숫자의 합!

function solution(numbers) {
  return 45 - numbers.reduce((acc, e) => acc + e, 0);
}
*/
