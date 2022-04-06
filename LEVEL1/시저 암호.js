function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") result += " ";
    else {
      let charCode = s.charCodeAt(i);
      // 원래 대문자였는데
      if (charCode <= 90) {
        charCode += n;
        // 변경 후 아스키코드값이 90보다 크다면
        if (charCode > 90) charCode -= 26;
      }
      // 원래 소문자였는데
      else {
        charCode += n;
        // 변경 후 아스키코드값이 122보다 크다면
        if (charCode > 122) charCode -= 26;
      }
      result += String.fromCharCode(charCode);
    }
  }
  return result;
}

/* 좋았던 다른 사람의 풀이 1:
1. continue;를 적절하게 사용한 점이 좋았다.
continue;를 보고 코드의 흐름을 파악할 수는 있지만 직접 사용하지는 못했는데,
적절한 때에 continue;를 사용하려고 시도해봐야겠다.
2. 아스키코드를 사용하지 않았다는 점도 새로웠다.

function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";
  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
*/

/* 좋았던 다른 사람의 풀이 2:
알파벳이라는게 매번 바뀌는 것도 아니고, 1<=n<=25라는 조건이 있기 때문에 가능한 풀이!

function solution(s, n) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}
*/
