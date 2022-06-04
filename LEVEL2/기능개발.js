function solution(progresses, speeds) {
  // 각 기능 개발 작업이 끝나기까지 남은 일수를 계산해서 daysLeftArr 배열에 저장
  const daysLeftArr = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  // 최초 배포날은 daysLeftArr의 첫 번째 요소
  let deployDay = daysLeftArr[0];
  // 각 배포에 몇 개의 기능이 배포될지 셀 변수
  let cnt = 0;
  // 각 배포에 몇 개의 기능이 배포될지 저장할 배열
  const answer = [];

  // leftDays 배열을 차례로 순회하며 현재 배포일보다 이후에 배포되어야할 기능을 만나면 이전까지의 기능을 한번에 배포
  daysLeftArr.forEach((daysLeft) => {
    if (deployDay < daysLeft) {
      deployDay = daysLeft;
      answer.push(cnt);
      cnt = 0;
    }
    cnt++;
  });
  answer.push(cnt);

  // 정답 반환
  return answer;
}

/* 좋았던 다른 사람의 풀이:
for문에서 i, j 두 개의 변수를 선언하여 j를 answer배열의 index로 사용한 점이 인상깊었다.
cnt변수를 따로 사용할 필요가 없고, 가독성도 좋다! 이 방식을 다양하게 활용할 수 있을 것 같다.

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
*/
