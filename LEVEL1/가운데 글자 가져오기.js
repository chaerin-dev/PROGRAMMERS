function solution(s) {
  return s.length % 2
    ? s[parseInt(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

/* 좋았던 다른 사람의 풀이:
문자열의 길이가 짝수일 경우와 홀수일 경우를 한번에 처리한 점이 인상깊었다.

function solution(s) {
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}
*/
