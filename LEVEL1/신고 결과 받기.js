function solution(id_list, report, k) {
  // 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리
  let set = new Set(report);
  report = Array.from(set);

  // 1. report를 2차원배열로 변형
  // 2. 각 유저가 신고당한 횟수 cnt에 저장
  // 3. 각 유저를 신고한 유저 who에 저장
  let cnt = Array.from({ length: id_list.length }, (i) => 0);
  let who = Array.from({ length: id_list.length }, (i) => []);
  for (let i = 0; i < report.length; i++) {
    report[i] = report[i].split(" ");
    cnt[id_list.indexOf(report[i][1])]++;
    who[id_list.indexOf(report[i][1])].push(report[i][0]);
  }

  // k회 이상 신고당한 유저 확인 및 각 유저가 받은 메일 개수 mail에 저장
  let mail = Array.from({ length: id_list.length }, (i) => 0);
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] < k) continue;
    for (let j = 0; j < who[i].length; j++) {
      mail[id_list.indexOf(who[i][j])]++;
    }
  }
  return mail;
}

/* 좋았던 다른 사람의 풀이:
1. map메서드의 활용
2. 배열의 각 요소를 순회할 때 for(let ... of ...) 구문 활용
3. 복잡한 인덱스 계산이 없어 직관적
4. who 배열 없이 각 유저가 신고당한 횟수, 받을 메일 개수 배열만 사용

배열의 각 요소를 순회할 때 습관적으로 기본 for문만 사용한는데,
forEach나 for(let ... of ...) 구문을 더 활용해봐야겠다.

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
*/
