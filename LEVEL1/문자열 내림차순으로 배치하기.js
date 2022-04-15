/* 나의 첫 번째 풀이:
'내림차순!'이라는 생각에 습관적으로 sort((a, b) => b - a)를 사용했는데,
문자와 문자를 빼면 결과는 NaN이 나올 뿐...

function solution(s) {
  return s.split("").sort((a, b) => b - a).join("");
}
*/

function solution(s) {
  // 문자열 -> 배열 -> 정렬 -> 순서뒤집기 -> 문자열
  return s.split("").sort().reverse().join("");
}

function solution2(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .join("");
}
