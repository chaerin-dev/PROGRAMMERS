function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += i * price;
  }
  return money > totalPrice ? 0 : totalPrice - money;
}

/* 좋았던 다른 사람의 풀이:
'지옥에 있는 가우스도 놀라서 돌아오겟네'라는 댓글이 너무 웃겼던 풀이..
왜 갑자기 가우스를 지옥으로 보내냐구욬ㅋㅋㅋㅋㅋㅋ

1번째 이용료: price
2번째 이용료: 2 * price
3번째 이용료: 3 * price
...
count번째 이용료: count * price
=> 총 이용료: (1 + 2 + 3 + ... + count) * price
= (((count + 1) * count) / 2) * price

가우스가 1부터 100까지의 합을 금방 구했던 일화를 떠올리면 쉽게 이해할 수 있다!

나는 문제를 풀 때 문제 자체를 그대로 구현하려는 경향이 있는데,
코드를 작성하기 전에 문제를 어떻게 단순화하거나 다르게 생각할 수 있는지 고민하는 과정을 거치는 습관을 들여야겠다.

function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
*/
