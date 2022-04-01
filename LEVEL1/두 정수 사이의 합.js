function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

/* 좋았던 다른 사람의 풀이:
'가우스의 재림'이라는 댓글이 너무 웃겼던 풀이..
첫 번째 정수와 마지막 정수를 더한 값을 정수의 갯수만큼 곱해준 뒤 이를 2로 나눠 반환!
가우스가 1부터 100까지의 합을 금방 구했던 일화를 떠올리면 쉽게 이해할 수 있다!

function adder(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
*/
