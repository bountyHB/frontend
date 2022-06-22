// 1. 이벤트가 발생한 요소에 접근하는 방법
// 1) 인라인 방식
function test1(event){
    // 매개값으로 이벤트 객체를 가져올 수 없다.
    console.log(event); // undifined
    console.log(window.event); // PointerEvent 객체
    console.log(window.event.target); // 접근가능. <button onclick="test1();">인라인 방식</button>
    console.log(this); // Window 객체
    console.log(this.event.target); // 접근가능. <button onclick="test1();">인라인 방식</button>
}

// 2) 프로퍼티 방식
let btn2 = document.getElementById('btn2');

// 익명함수
// btn2.onclick = function(event){
//     console.log(event.target); // 접근가능. <button id="btn2">프로퍼티 방식</button> 
//     console.log(window.event.target); // 접근가능. <button id="btn2">프로퍼티 방식</button> 
//     // onclick이 btn2의 메소드이기 때문에, this는 객체 자기자신을 가리킨다. 
//     console.log(this); // 요소 객체. <button id="btn2">프로퍼티 방식</button>
// };

// 화살표함수
btn2.onclick = (event)=>{
    console.log(event.target); // 접근가능. <button id="btn2">프로퍼티 방식</button> 
    console.log(window.event.target); // 접근가능. <button id="btn2">프로퍼티 방식</button> 
    // 메소드 지정시 화살표함수는 this가 window를 가리키게 됨
    console.log(this); // window 객체.

    // 이벤트 핸들러 제거
    btn2.onclick = null;
};

// 3) addEventListener() 메소드 방식
let btn3 = document.getElementById('btn3');
// 익명함수
// btn3.addEventListener('click', function(event){
//     console.log(event.target); // 접근가능. <button id="btn3">addEventListener() 메소드 방식</button> 
//     console.log(window.event.target); // 접근가능. <button id="btn3">addEventListener() 메소드 방식</button> 
//     console.log(this); // 접근가능. <button id="btn3">addEventListener() 메소드 방식</button>
// });

// 화살표함수
btn3.addEventListener('click', (event)=>{
    console.log(event.target); // 접근가능. <button id="btn3">addEventListener() 메소드 방식</button> 
    console.log(window.event.target); // 접근가능. <button id="btn3">addEventListener() 메소드 방식</button> 
    console.log(this); // window 객체.
});

btn3.addEventListener('click', (event)=>{
    console.log('동일한 이벤트에 여러 개의 핸들러 지정 가능'); 
});


// 2. 태그(요소)별 기본 이벤트 제거
// 1) 기본 이벤트 제거

function passwordCheck(){
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;

    if(pass1 !== pass2){
        alert('비밀번호가 일치하지 않습니다.');
        
        return false;
    }
}

// 2) 기본 이벤트 제거 2
let submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    let userId = document.getElementById('userId').value;
    let regExp = /^[a-zA-Z0-9]{5,12}$/;
    
    // 영문자, 숫자로만 총 5~12자 사이로 입력해 주세요.
    if(!regExp.test(userId)){
        alert('아이디를 정상적으로 입력해주세요.');

        // 메소드 방식에서는 아래와 같이 기본 이벤트를 제거해야 한다.
        event.preventDefault();
    }

    console.log(userId);
});












