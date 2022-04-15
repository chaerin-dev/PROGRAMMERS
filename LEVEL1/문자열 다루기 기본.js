/* 나의 첫 번째 풀이:
쉽네~ 하고 풀었는데 하나의 테스트케이스에서만 실패해서 당황했다.

반례: 1e22
=> 1e22를 Number()를 이용해서 숫자로 형 변환하면 1의 22승, 즉 1이 된다!!!
=> 이런 코너케이스도 생각할 수 있도록 하자...

function solution(s) {
    return (s.length === 4 || s.length === 6) && (Number(s)) ? true : false;
}
*/

function solution(s) {
  // 길이가 4 혹은 6이 아니면 false 반환
  if (s.length !== 4 && s.length !== 6) return false;
  // 각 자리중에 숫자가 아닌 것이 하나라도 있으면 false 반환
  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) return false;
  }
  // 위의 모든 조건에 포함되지 않으면
  // (길이가 4 혹은 6이고, 숫자로만 구성되어 있으면) true 반환
  return true;
}

/* 좋았던 다른 사람의 풀이:
정규표현식을 사용한 점이 인상깊었다.
/\d{6}/: 6자리 숫자 포함
/^\d{6}/: 6자리 숫자로 시작
/\d{6}$/: 6자리 숫자로 끝
/^\d{6}$/: 6자리 숫자
/^\d{6}$|^\d{4}$/: 6자리 숫자 또는 4자리 숫자

function solution(s) {
  let regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
*/
