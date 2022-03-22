function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let ans_row = [];
    for (let j = 0; j < arr1[0].length; j++) {
      ans_row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(ans_row);
  }
  return answer;
}

/* 좋았던 다른 사람의 풀이:
처음에는 엥.. 이게 뭐야.. 했지만, 1분정도 들여다보고 오!! 와!! 했던 풀이!! A(2중 배열)의 각 행(배열)을 a라고 하고, 또 그 a(배열)의 각 요소를 b라고 하고, 각 b에 B(2중 배열)의 각 요소를 더해주면 됨!! .map이 꽤나 유용한 메서드인 것 같다!

function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
*/
