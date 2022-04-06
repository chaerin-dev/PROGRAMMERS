function solution(n) {
  // n의 제곱근값을 x에 저장
  let x = Math.sqrt(n);
  // x가 정수이면 x+1의 제곱 반환, x가 정수가 아니면 -1 반환
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}

/* 좋았던 다른 사람의 풀이들:
정수임을 판별하는 다양한 방법들이 인상깊었다.

function solution(n) {
  let x = Math.sqrt(n);
  return parseInt(x) - x === 0 ? Math.pow(x + 1, 2) : -1;
}

function solution(n) {
  let x = Math.sqrt(n);
  return x%1 === 0 ? Math.pow(x + 1, 2) : -1;
}
*/

console.log(1.2 % 1);
