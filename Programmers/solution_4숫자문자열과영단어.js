function solution(s) {
  var eng = [
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

  for (var i = 0; i < eng.length; i++) {
    //s = s.replace(eng[i], i);
    s = s.replace(new RegExp(eng[i], "g"), i);
    const e = eng[i];
    //s = s.replace(e.g, i);
  }

  return Number(s);
}

//5,7,8 테스트에서 실패??!
//replace는 같은 문자열을 다시 바꿔줄 수 없는거 같다.
//replaceAll 을 사용하면 되지?라고 생각이 들었지만 저건 JAVA 함수다 ㅋㅋㅋㅋ
//(2021년 완전최신 javascript에는 나왔다고는 하는데... ) 이것 때문에 사용할 수는 없으니..
//정규식을 사용하여 바꿔준다. new RegExp 부분.. 일반적인 /바꿀문자/g 는 적용이 안되서 저렇게 함..

function solution_good(s) {
  //다른 풀이 중에 좋았던것
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
