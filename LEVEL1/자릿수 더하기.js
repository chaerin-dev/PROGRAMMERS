function solution(n) {
  // 숫자 풀이
  let result = 0;
  while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }
  return result;

  // // 문자열 풀이
  // // 숫자 -> 문자열 -> 배열 -> 각 요소를 정수로 변환한 후 더한 누적 결과값 반환
  // return String(n).split("").reduce((acc, item) => acc += parseInt(item), 0);
}
