// 명함 문제
function solution(sizes) {
  max_arr = [];
  min_arr = [];
  sizes.forEach((item, index) => {
    if (item[0] > item[1]) {
      max_arr.push([item[0]]);
      min_arr.push([item[1]]);
    } else {
      max_arr.push([item[1]]);
      min_arr.push([item[0]]);
    }
  });
  return Math.max.apply(Math, max_arr) * Math.max.apply(Math, min_arr);
}

// 배열에서 최대, 최소 구할 떄 Math에서 메서드 빌려와서 사용해야 한다

// 배열 순회할 때 forEach !
