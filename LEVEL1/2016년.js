function solution(a, b) {
  // // Date 이용
  // let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // let dateStr = "2016-" + a + "- " + b;
  // let date = new Date(dateStr);
  // return week[date.getDay()];

  let arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // 1월 1일부터 a월 b일까지 며칠 차이인지 저장할 변수
  let passedDays = 0;
  // a달 전까지의 모든 달에 대해 각 달의 날짜 수 더해줌
  for (let i = 1; i < a; i++) passedDays += arr[i];
  // b일 더해주고 1월 0일이 아닌 1월 1일부터 시작하므로 1 빼줌
  passedDays += b - 1;
  return week[(5 + passedDays) % 7];
}

/* 좋았던 다른 사람의 풀이:
1. 문자열을 사용하는 방법 외에 Date를 생성하는 새로운 방법을 알게 되었다.
(월 입력에 주의!!!)
2. 생성된 Date를 문자열로 변환하면 앞 세글자는 요일의 줄임말이다!

function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}
*/
