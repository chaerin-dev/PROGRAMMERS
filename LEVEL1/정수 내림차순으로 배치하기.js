function solution(n) {
  // 정수 -> 문자열 -> 배열
  let arrN = String(n).split("");
  // 배열 내림차순 정렬
  arrN.sort((a, b) => b - a);
  // 배열 -> 문자열 -> 정수
  return parseInt(arrN.join(""));
}

/* 좋았던 다른 사람의 풀이:
정수 + "" 을 이용해 문자열로 형 변환을 한 것과
+문자열 을 이용해 정수로 형 변환을 한 것이 인상깊었다.
또, 체이닝 기법을 활용한 점도 새로웠다!

function solution2(n) {
  const strN = n + "";
  const arrN = strN.split("").sort().reverse().join("");
  return +arrN;
}
*/
