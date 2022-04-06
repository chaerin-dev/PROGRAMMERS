function solution(n) {
  // 숫자 -> 문자열 -> 배열 -> 뒤집기 -> 모든 원소에 대해 자연수로 형 변환
  return String(n)
    .split("")
    .reverse()
    .map((item) => parseInt(item));
}

/* 좋았던 다른 사람의 풀이:
문자열과 배열에 다양한 메서드가 존재하다보니
자꾸 문자열, 배열로 변환해서 문제를 풀게 된다.
하지만 연산 속도는 대체적으로 숫자 계산이 빠르다는 걸 잊지 말자!!!

function solution(n) {
  var arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
}
*/
