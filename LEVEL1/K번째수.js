function solution(array, commands) {
  let t = commands.length;
  let answer = [];
  while (t--) {
    let command = commands.shift();
    answer.push(
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
    );
  }
  return answer;
}

/* 좋았던 다른 사람의 풀이:
풀이 자체는 내 풀이와 완벽히 일치하지만,
map 메서드를 이용해서 while문 없이 여러 테스트케이스를 처리한 점이 인상깊었다.

function solution(array, commands) {
  return commands.map((v) => {
    return array
      .slice(v[0] - 1, v[1])
      .sort((a, b) => a - b)
      .slice(v[2] - 1, v[2])[0];
  });
}
*/
