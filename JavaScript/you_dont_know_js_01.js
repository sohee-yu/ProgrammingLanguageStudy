// YOU DON'T KNOW JS 01회
// 변수는 타입이 없지만 값은 타입이 있고, 타입은 값의 내재된 특성을 정의한다.

// 유사배열
// [] 로 감싸여 있지만 배열이 아닌 것을 유사배열이라 함
// 유사배열 값을 진짜 배열로 바꾸고 싶을 때는, Array 프로토타입에서 매서드를 빌려오는 방법이 있다.
function foo() {
  var arr = Array.prototype.slice.call(arguments);
  arr.push("bam");
  console.log(arr);
}

foo("bar", "baz"); // ["bar", "baz", "bam"]

// 문자열의 순서를 거꾸로 뒤집는 방법
// 배열은 reverse() 매서드로 순서를 거꾸로 할 수 있지만, 문자열은 그럴 방법이 없다.
// 이럴 때, '문자열을 배열로 전환 -> reverse() 매서드를 사용해서 순서 뒤집기 -> 배열을 문자열로 되돌리기' 방법을 사용한다.

var a = "foo";
var b = ["f", "o", "o"];

var c = a
  .split("") // 'a'를 문자의 배열로 분할한다.
  .reverse() // 문자 배열의 순서를 거꾸로 뒤집는다.
  .join(""); // 문자 배열을 합쳐 다시 문자열로 되돌린다.

c; // "oof"

// 숫자를 지수형으로 표시하는 메서드 : toExponential()
var a = 5E10;
a; // 50000000000 (0이 10개)
a.toExponential(); // "5e+10" 으로 출력

var b = a * a:
b; // 2.5e+21

var c = 1 /a ;
c; // 2e-11

// null : 비어있는 값. 예전에는 값이 있었지만, 지금은 없는 상태
// undefined : 아직 값을 가지지 않은 상태(값이 정의되지 않음)

// NaN : 숫자가 아니지만, 숫자와 어떻게든 연관이 되어 있어 이상한 상태
var a = 2 / "foo" // NaN 상태
typeof a === "number" // true

// isNaN() 함수가 NaN 여부를 말해주지만, 이 함수는 '인자 값이 숫자인지 아닌지만 판단'하므로, 아래와 같은 결함을 가진다.
var a = 2 / "foo"
var b = "foo"

window.isNaN(a); // true
window.isNaN(b); // true(?????)

// ES6 부터는 Number.isNaN() 함수로 안전하게 NaN 여부를 체크할 수 있다.
// ES6 이하 버전은 아래 함수를 추가하여 사용할 수 있다
if(!Number.isNaN) {
  Number.isNaN = function(n) {
    return {
      typeof n === "number" && window.isNaN(n)  // inNaN() 매서드를 검사하되, n 의 값이 number 인지도 동시에 체크하는 함수가 Number.isNaN() 인 듯.
    };
  };
}

var a = 2 / "foo"
var b = "foo"

Number.isNaN(a); // true
Number.inNaN(b); // false
