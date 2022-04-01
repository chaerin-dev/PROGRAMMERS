function solution(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

/* 좋았던 다른 사람의 풀이:
홀수일 경우에 num % 2의 결과는 1이 나오고, 이는 true의 의미임을 이용!

function solution(num) {
  return num % 2 ? "Odd" : "Even";
}
*/
