function solution(x, n) {
  var answer = [];

  let add_gap = x;

  // n번 반복
  for (let i = 0; i < n; i++) {
    answer.push(x); // 처음 배열에 넣을 x
    x += add_gap; // x를 배열에 넣은 후 x값을 add_gap만큼 증가
  }

  return answer;
}

/* 좋았던 다른 사람의 풀이 1
: 무작정 코드를 작성하지 말고, 내가 구현하는게 무엇인지 생각하자!

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}
*/

/* 좋았던 다른 사람의 풀이 2:
: n 크기의 배열을 만들고, x로 다 채운 뒤 배열의 각 요소에 콜백함수를 실행하는 .map 이용!
코딩테스트 문제를 꼭 짧게 풀어야할 필요는 없지만, 새로운 접근이고 신기하다!!!

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
*/
