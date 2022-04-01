function solution(x) {
  // x의 각 자리에 접근하기 위해 x를 문자열로 변환
  let x_str = x.toString();
  // 각 자릿수의 합을 저장할 변수
  let sum_of_digits = 0;
  // x_str의 각 문자를 숫자로 바꿔 sum_of_digits에 더해줌
  for (let i = 0; i < x_str.length; i++) {
    sum_of_digits += Number(x_str[i]);
  }
  // x가 각 자릿수의 합으로 나누어떨어지는지 여부 반환
  return x % sum_of_digits == 0;
}

/* 좋았던 다른 사람의 풀이:
정석적인 방법! 형 변환해서 푸는 것 보다 속도가 빠르다고 한다.

function Harshad(n) {
  var result;
  var ori_n = n;
  var sum = 0;
  while (n) {
    sum += n % 10;
    n /= 10;
    n = Math.floor(n);
  }
  return ori_n % sum == 0;
}
*/
