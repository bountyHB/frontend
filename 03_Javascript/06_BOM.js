window.onload = () => {
    // 1. window 객체
    // 1) window.open()
    let btn1 = document.getElementById('btn1');
    
    btn1.addEventListener('click', ()=>{
        // window.open(); // 새탭
        // window.open('https://www.naver.com'); // 네이버 페이지
        // window.open('https://www.naver.com', 'naver'); // 타겟
        window.open('https://www.naver.com', 'naver', 'width=500, height=600'); // 새 탭 크기조정
    });
    
    // 2) 타이머 (Timer)
    // window.setTimeout()
    let btn2 = document.getElementById('btn2');
    
    btn2.addEventListener('click', ()=>{
        let timerId = 0;
        let newWindow = window.open();

        // window.setTimeout(() => {}, 초 (밀리세컨드단위));
        // window.setTimeout(() => newWindow.close(), 3000); // 3초후에 탭이 사라짐
        newWindow.alert('확인을 클릭하면 3초 후에 이 페이지는 종류됩니다');
        // 일정 시간 후에 콜백 함수를 한 번 실행 
        // window.setTimeout(() => newWindow.close(), 3000);
        
        timerId = window.setTimeout(() => newWindow.close(), 3000);
        // timeId를 clearTimeout() 함수에 전달하면 해당 id의 타이머를 취소할 수 있다. 
        // 3초라는 시간보다 이 코드가 먼저 실행되기 때문에, 취소가 됨.
        window.clearTimeout(timerId);

        console.log(newWindow);
        console.log(timerId);
    });

    // window.setInterval()
    let btn3 = document.getElementById('btn3');
    
    btn3.addEventListener('click', function(){
        let div3 = document.getElementById('div3');
        // 3초에 한번씩 hoho 찍힘
        // window.setInterval(() => {div3.innerHTML += ' hoho '}, 3000); 
        
        // 시계 만들기
        window.setInterval(() => {
            let date = new Date();
            div3.innerHTML = `${date.getHours()} : ${date.getMinutes()} : <span id="second">${date.getSeconds()}</span> : ${date.getMilliseconds()}`
        }, 1); 
    });

}