function solution(s) {
  s = s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);
  return parseInt(s);
}

/* 좋았던 다른 사람의 풀이:
대박... 대박... 미쳤네요 진짜로... 하... 너무 기발한 풀이.
numbers를 순회하면서 각 단어로 문자열 s를 나누고 인덱스 i로 묶어줌!!!!
인덱스 i를 사용할 생각을 어떻게 하신거지?!?!?!?!?!

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;
  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }
  return Number(answer);
}
*/
