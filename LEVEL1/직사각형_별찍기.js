process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  // 정답을 저장할 문자열 answer
  answer = "";

  // 세로 길이만큼 아래의 과정(가로 길이만큼 별 더해주고 줄 바꾸기) 반복
  for (let i = 0; i < b; i++) {
    // 가로 길이만큼 문자열에 별 더해주기
    for (let j = 0; j < a; j++) answer += "*";
    // 가로 길이만큼 별을 다 더해줬으면 줄 바꾸기
    answer += "\n";
  }

  // 정답 출력
  console.log(answer);
});

/* 좋았던 다른 사람의 풀이:
문자열을 주어진 횟수만큼 반복한 새로운 문자열을 반환하는 .repeat를 사용!!!

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
*/
