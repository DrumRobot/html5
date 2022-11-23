var buttons = document.querySelectorAll('button');
var input = document.querySelector('input');

for (var i = 0; i < buttons.length; i++) {
  // 반복 실행
  buttons[i].addEventListener('click', function (event) {
    // EventListener -> click 이벤트에 실행되는 코드
    var text = event.target.value; // x 대신에 * 사용
    console.log(text);
    switch(text) {
      case '=': // eval 연산
        input.value = eval(input.value);
        break;
      case 'AC': // 텍스트 초기화
        input.value = '';
        break;
      default: // 텍스트 연결
        input.value += text;
    }
  });
}
