function solution(absolutes, signs) {
  // 연산 결과를 저장할 변수
  let result = 0;
  // signs의 각 요소에 대해
  signs.forEach((e, i) => {
    // 요소가 true이면 result값에 같은 인덱스의 absolutes 요소를 더해줌
    if (e) result += absolutes[i];
    // 요소가 false이면 result값에 같은 인덱스의 absolutes 요소를 빼줌
    else result -= absolutes[i];
  });
  // result 반환
  return result;
}

/* 좋았던 다른 사람의 풀이:
1. reduce메서드를 적절히 이용한 점이 인상깊었다.
2. 삼항연산자를 적절히 이용한 점이 인상깊었다.
signs의 값에 따라 absolutes의 각 값을 더하거나 빼야 한다고 생가해서 reduce메서드를 생각해내지 못했는데,
signs의 값에 따라 absolutes의 각 값에 부호만 붙여주고 일괄적으로 더하면 된다!

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + (signs[i] ? val : -val), 0);
}
*/
