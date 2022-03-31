function solution(phone_number) {
  // "*"을 phone_number의 길이에서 4만큼 뺀 횟수만큼 반복한 문자열과
  // phone_number의 -4인덱스부터 끝까지 추출한 문자열을
  // 이어붙인 후 반환
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

/* 좋았던 다른 사람의 풀이:
정규식을 이용!
코딩테스트때마다 정규식때문에 난감했는데, 제대로 공부해봐야겠다..

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
*/
