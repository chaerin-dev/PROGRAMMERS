// 원래 문자가 모두 소문자여야 할 이유는 없다는 사실,
// 공백이 하나 이상일 수 있다는 사실을 빠뜨려서 조금 오래 생각한 문제..!
function solution(s) {
  let result = "";
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      flag = false;
      result += s[i];
    } else if (flag) {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
    flag = !flag;
  }
  return result;
}

/* 좋았던 다른 사람의 풀이:
1. 정규식으로 연속된 두 문자를 표현한 점이 인상깊었다.
2. 왜 문자열 전체를 대문자로 변환하고 시작했을까.. 라고 생각했는데,
각 단어의 길이가 홀수일 경우 마지막 문자를 고려한 것이었다.
아이디어가 참신했던 풀이! 

function solution(s) {
  return s
    .toUpperCase()
    .replace(/(\w)(\w)/g, (a) => a[0].toUpperCase() + a[1].toLowerCase());
}
*/
