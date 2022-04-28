// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript
function solution(new_id) {
  //1단계
  new_id = new_id.toLowerCase();

  //2단계
  new_id = new_id.replace(/[^\w-_.]/g, "");

  //3단계
  while (new_id.includes("..")) {
    new_id = new_id.replace("..", ".");
  }

  //4단계
  if (new_id.length > 0 && new_id[0] == ".") {
    new_id = new_id.slice(1, new_id.length);
  }
  //4단계
  if (new_id.length > 0 && new_id[new_id.length - 1] == ".") {
    new_id = new_id.slice(0, new_id.length - 1);
  }

  //5단계
  if (new_id == "") {
    new_id = "a";
  }

  //6단계
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] == ".") {
      new_id = new_id.slice(0, new_id.length - 1);
    }
  }

  //7단계
  if (new_id.length < 3) {
    let char = new_id[new_id.length - 1];
    while (new_id.length < 3) {
      new_id += char;
    }
  }

  return new_id;
}
