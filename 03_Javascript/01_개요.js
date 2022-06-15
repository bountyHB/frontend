var btn2 = document.getElementById('btn2');

// consoleTest()는 안되고 함수이름만 줘야함.
// btn2에 onclick 이벤트가 발생하면 consoleTest를 실행한다.
btn2.onclick = consoleTest;

// consoleTest 메소드 생성. 
function consoleTest(){
    // console.log에 btn2 버튼 클릭이라고 값이 출력된다. 
    console.log('btn2 버튼 클릭')
}
