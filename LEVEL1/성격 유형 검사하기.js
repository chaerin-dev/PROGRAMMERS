function solution(survey, choices) {
  // 지표 배열
  const INDICATORS = ["RT", "CF", "JM", "AN"];
  // 각 유형별 점수를 저장할 객체
  const resultObj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  // choice: 1 -> 두 유형 중 전자 +3
  // choice: 2 -> 두 유형 중 전자 +2
  // choice: 3 -> 두 유형 중 전자 +1
  // choice: 4
  // choice: 5 -> 두 유형 중 후자 +1
  // choice: 6 -> 두 유형 중 후자 +2
  // choice: 7 -> 두 유형 중 후자 +3
  choices.forEach((choice, i) =>
    choice < 4 ? (resultObj[survey[i][0]] += 4 - choice) : (resultObj[survey[i][1]] += choice - 4)
  );

  // 성격 유형 검사 결과를 저장할 문자열
  let result = "";
  INDICATORS.forEach((indicator) => {
    // RT, CF, JM, AN 각 지표의 두 유형 중
    // 전자의 점수가 크거나 같을 경우 해당 유형을 의미하는 문자를 result 문자열에 더해줌
    // 후자의 점수가 클 경우 해당 유형을 의미하는 문자를 result 문자열에 더해줌
    result += resultObj[indicator[0]] >= resultObj[indicator[1]] ? indicator[0] : indicator[1];
  });

  // 성격 유형 검사 결과 반환
  return result;
}
