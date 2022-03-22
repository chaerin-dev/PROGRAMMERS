/* 첫 풀이: 정확성 50 효율성 0 

function solution(participant, completion) {
  var answer = "";
  // 완주한 모든 선수에 대하여
  for (let i = 0; i < completion.length; i++) {
    // 참가자 명단에서 해당 선수의 이름을 찾고
    let index = participant.indexOf(completion[i]);
    // 참가자 명단에서 해당 이름 삭제
    participant.splice(index, 1);
  }
  // 참가자 명단에 남아있는 선수가 완주하지 못한 선수
  answer = participant[0];
  return answer;
}
*/

function solution(participant, completion) {
  var answer = "";

  // 두 배열을 정렬한다!
  participant.sort();
  completion.sort();

  // 앞에서부터 차례로 비교하다가 값이 다를 때 participant의 요소가 완주하지 못한 선수!!
  // if (participant[i] != completion[i] || i == participant.length - 1) 이런 식으로
  // 완주하지 못한 선수의 이름이 마지막에 있을 경우도 고려해야 하나..? 라고 생각했지만
  // 그 때는 completion[i]의 값이 undefined가 되므로 괜찮음!
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i] || i == participant.length - 1) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}

/* 좋았던 다른 사람의 풀이: 
해시 카테고리의 문제를 배열 정렬로 풀어서 찝찝했는데..
배열의 길이가 길면 sort 때문에 성능이 낮아질 것이라고 한다..
아래의 풀이는 '해시'라는 카테고리에 적절한 풀이인데,
participation의 요소를 map에서 찾아 그 value값에 1을 더해주고,
completion의 요소를 map에서 찾아 그 value값에 1을 빼준다.
최종적으로 map에서 value값이 양수인 것을 찾으면 그 key가 완주하지 못한 선수!!
처음으로 이름이 등장하는 선수는 기존에 저장된 value값이 없으므로
0을 value값으로 할당해준 뒤 1을 더하거나 빼줘야 하고,
이전에 이름이 등장했던 선수는 기존에 저장된 value값에 1을 더하거나 빼줘야 하는데
이 두 가지 케이스를 하나의 코드로 해결한 점이 정말정말정말 인상깊다.

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);

    console.log(map);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}

*/
