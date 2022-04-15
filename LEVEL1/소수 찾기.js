// 소수인지 판별하는 함수
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(n) {
  // 소수의 개수를 저장할 변수
  let answer = 0;
  // 1은 소수가 아니므로 2부터 n까지 모든 수에 대해
  for (let i = 2; i <= n; i++) {
    // 소수이면 소수의 개수에 1 추가
    if (isPrime(i)) answer++;
  }
  return answer;
}

/* 좋았던 다른 사람의 풀이:
에라토스테네스의 체를 활용한 풀이
참고: https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4

function solution(n) {
  // 2부터 n까지의 수로 구성된 Set
  const s = new Set();
  for (let i = 2; i <= n; i++) {
    s.add(i);
  }

  // 2부터 n의 제곱근보다 작은 최대 정수까지 
  for (let j = 2; j < Math.sqrt(n); j++) {
    // Set에 해당 수가 포함되면
    if (s.has(j)) {
      // 그 수를 제외하고 그 수의 배수는 모두 삭제
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
*/
