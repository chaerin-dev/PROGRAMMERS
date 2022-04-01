function solution(num) {
  // 작업을 반복한 횟수를 저장할 변수
  let cnt = 0;
  // num이 1이 되면 반복 종료
  while (num > 1) {
    // 작업을 500번 반복해도 1이 되지 않으면 -1 반환
    if (cnt == 500) return -1;
    // 작업 반복 횟수 증가
    cnt++;
    // 입력된 수가 짝수이면 2로 나누기
    if (num % 2 == 0) num /= 2;
    // 입력된 수가 홀수이면 3을 곱하고 1을 더하기
    else {
      num *= 3;
      num++;
    }
  }
  // 작업을 반복한 횟수 반환
  return cnt;
}

/* 좋았던 다른 사람의 풀이:
삼항연산자를 이용해서 코드를 간단하게 표현했다.

function solution(num) {
  let cnt = 0;
  while (num > 1 && cnt < 500) {
    cnt++;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return num == 1 ? cnt : -1;
}
*/
