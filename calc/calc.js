var buttons = document.querySelectorAll('button');
var input = document.querySelector('input');
var operand = undefined; // 값을 대입하지 않았다
var flag = false; // 연산 버튼을 눌렀다
for (var i = 0; i < buttons.length; i++) {
  // 반복 실행
  buttons[i].addEventListener('click', function (event) {
    // EventListener -> click 이벤트에 실행되는 코드
    var text = event.target.innerText;
    console.log(text);
    switch(text) {
      case '+':
      case '-':
      case 'x':
      case '/':
        operand = parseInt(input.value);
        flag = true;
        break;
      default:
        // 연산 버튼을 눌렀을 때 수를 새로 쓴다
        if (flag) {
          input.value = text;
          flag = false;
        } else {
          input.value += text;
        }
    }
    // 1. 변수 사용
    // var origin = input.value;
    // input.value = origin + text;
    // 2. 식 하나로
    // input.value = input.value + text;
    // 3. 축약 연산자. input의 value에 text를 추가(연결)

  });
}
