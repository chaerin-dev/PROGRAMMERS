function solution(arr, divisor) {
  let answer = [];
  arr.forEach((e) => {
    if (e % divisor === 0) answer.push(e);
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

/* 좋았던 다른 사람의 풀이:
콜백함수의 조건을 만족하는 '모든' 값을 배열로 반환하고,
조건을 만족하는 값이 없으면 빈 배열을 반환하는 filter 메서드 활용

function solution(arr, divisor) {
  let answer = arr.filter((v) => v % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
*/
