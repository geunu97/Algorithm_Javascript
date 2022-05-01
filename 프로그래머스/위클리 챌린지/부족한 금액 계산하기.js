function solution(price, money, count) {
  var result = 0;
  for (let i = 1; i <= count; i++) {
    result += price * i;
  }
  console.log(result);

  if (result - money >= 0) return result - money;
  else return 0;
}
