// 1. 함수선언
// 1) 선언적 함수
function test1(){
    alert('test1()함수실행');
}

// 2) 익명함수
let btn2 = document.getElementById('btn2');

// btn2.onclick = function(){ 
//     alert('이벤트 핸들러 실행');
// }

btn2.addEventListener('click', function(){
    alert('이벤트 핸들러 실행');
});

// 함수 정의와 동시에 즉시 실행되는 함수로
// 단, 한 번만 호출되며 다시 호출할 수 없다.
(
    function(a,b){
        document.getElementById('p1').innerHTML = `a : ${a}, b: ${b}, a + b : ${a + b}`
    }
)(10,20);

// 3) 화살표 함수(Arrow Function)

/*
    [표현법]
        1) 매개 변수 처리
            - 매개 변수가 없을 때 : () => { ... }
            - 매개 변수가 하나일 때 : x => { ... }
            - 매개 변수가 두개 이상일 때 : (x, y, ...) => { ... }
        2) 리턴 처리
            - 처리할 라인이 여러 개라면 {}로 감싸서 처리해야 한다.
                (x, y) => {
                    실행 구문;

                    return x + y;
                }
            - 처리할 라인이 하나라면 {}와 return 문을 생량할 수 있다.
                (x, y) => {return 반환값};
                (x, y) => x + y;
*/

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', ()=>alert('화살표 함수를 실행'));

// 2. 함수 호출
// 1) 매개 변수
let btn4 = document.getElementById('btn4');
// btn4.addEventListener('click', () => {
// 이벤트 핸들러에 매개값을 지정할 수 있음
btn4.addEventListener('click', (event) => {
    // argTest() // 기본값 없으면 undifined
    // argTest() // 기본값 설정하면 기본값 출력됨
    // argTest('안녕하세요'); // 안녕하세요
    // argTest('안녕하세요', '헤헤'); // 안녕하세요 
    console.log(event);
    // 화살표 함수에서는 arguments 객체를 생성하지 않는다.
    // console.log(arguments); // arguments is not difined

});

// function argTest(value){
// 매개변수 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용된다. (ES6 부터 도입)
function argTest(value = '매개값 없음(기본값)'){
    alert(value);
}

// 2) argument 객체 (가변으로 가능)
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function(){
    let result = 0;
    
    // console.log(arguments);
    result = sum(124, 500, 11, 370);
    result = sum(11, 12, 13);

    alert(`sum : ${result}`);
});

function sum(){
    let result = 0;

    console.log(arguments);
    for (const value of arguments) {
        // console.log(value);
        result += value;
    }

    return result;
}


// 3. 함수리턴
// 1) 일반적인 값 리턴
let btn6 = document.getElementById('btn6');
btn6.addEventListener('click',() => {
    alert(`random: ${ran()}`);
});

function ran(){
    return parseInt((Math.random()*100)+1);
}

// 2) 익명 함수 리턴
let btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {
    // 방법 (1) 변수에 넣은 후 호출
    // let func = funcTest();
    // func();

    // 방법 (2) 힘수를 호출하며 익명함수를 함께 호출
    // funcTest()(); // 익명 함수를 호출하는 것
    // funcTest(); // 작동하지 않음
    funcTest(20)(); // 밑에 매개값 넘겨줌
});

// function funcTest(){
//     return function(){
//         alert('익명 함수를 리턴하는 함수');
//     }
// }

function funcTest(age){
    // 클로저
    // - 내부함수가 사용하는 외부함수의 지역변수는
    //   내부 함수가 소멸할 때까지 소명되지 않는 특성을 클로저라고 한다.
    let name = '홍길동';

    return function(){
        alert(`${name}님 안녕하세욧, age : ${age}`);
    };
}

// 4. 내장 함수
// 1) eval() 함수 : 문자열을 자바스크립트 코드로 변환
let btn8 = document.getElementById('btn8');
// btn8.addEventListener('click',() => {
//     let str = 'let p2 = document.getElementById("p2");'
//     str += 'p2.innerHTML = "1과 2의 합은: 3입니다.";';
//     eval(str);
// });
btn8.addEventListener('click',() => {
    let exec = document.getElementById('exec');
    let p2 = document.getElementById('p2');

    p2.innerHTML = `실제 입력된 값 : ${exec.value}<br>`;
    p2.innerHTML += `eval(exec.value) : ${eval(exec.value)}<br>`;

});

// 2) isFinite()  : 유한한 값인지 확인
//    isNaN() 함수 : 자바스크립트로 표현할 수 없는 숫자(NaN)인지 확인
let btn9 = document.getElementById('btn9');
btn9.addEventListener('click',() => {
    let p3 = document.getElementById('p3');

    p3.innerHTML += `10 / 0 : ${10 / 0}<br>`;
    p3.innerHTML += `-10 / 0 : ${-10 / 0}<br>`;
    p3.innerHTML += `isFinite(10 / 0) : ${isFinite(10 / 0)}<br>`;
    p3.innerHTML += `isFinite(-10 / 0) : ${isFinite(-10 / 0)}<br>`;
    p3.innerHTML += `10 / 'a' : ${10 / 'a'}<br>`;
    p3.innerHTML += `isNaN(10 / 'a') : ${isNaN(10 / 'a')}<br>`;
});










