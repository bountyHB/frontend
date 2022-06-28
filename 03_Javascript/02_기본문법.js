// 자바스크립트가 head 부분에 위치할때는, heading 아이디가 아직 없어 실행되지 않음.
    // document.getElementById('heading1').style.backgroundColor = 'pink';

    // 1. 변수
    // 1) 변수 선언
    // 전역 변수 선언
    // 브라우저 콘솔에서 window.str을 찍으면 출력됨.
    str1 = '전역변수';
    var str2 = 'var 전역변수';
    // let 은 브라우저 콘솔에서 window.str3을 찍으면 undifined로 나오게됨.
    let str3 = 'let 전역변수';

    console.log(str1);
    console.log(str2);
    console.log(str3);
    
    // 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행된다.
    window.onload = function(){
        // 지역변수가 전역변수에 우선된다.
        var str2 = 'var 지역변수';
        var str4 = '지역변수'; 

        document.getElementById('heading1').style.backgroundColor = 'pink';
        console.log(this.str1);
        console.log(window.str2);
        console.log(str2);
        console.log(str3);
        console.log(str4);
        console.log(this.str4); // undifined
        console.log(window.str4); // undifined

        //var, let, const(상수)의 차이점
        // 1) 중복 선언
        var num = 0;
        console.log(num);

        var num = 10;
        console.log(num);
        
        var num = 20;
        console.log(num);

        let num2 = 10;
        console.log(num2);
        
        // 에러
        // let num2 = 20; 
        // console.log(num2); 

        const NUM3 = 10;
        console.log(NUM3);
        
        // 에러
        // const NUM3 = 20; 
        // console.log(NUM3);
        
        // 상수이기 때문에 값을 바꾸려해도 에러가 발생한다.
        // NUM3 = 20;

        // 2) 유효범위(스코프)
        // var 키워드로 선언한 변수는 함수 유효 범위를 갖는다.
        if(true){
            var num4 = 40;

            console.log(num4);
        }
        console.log(num4);
        
        // let,const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.
        if(true){
            let num5 = 50;
            const NUM6= 60;

            console.log(num5);
            console.log(NUM6);
        }
        // console.log(num5); // 블록을 벗어나 오류
        // console.log(NUM6); // 블록을 벗어나 오류

        // var의 경우. 선언을 뒤에해도 오류나지 않음
        // console.log(num7); // undifined
        // var num7;
        
        // let의 경우. 오류
        // console.log(num8); // 오류
        // let num8;
    }

    function add (a, b){
        return a + b;
    }

    // 2. 자료형
    function typeTest(){
        let name = '경가'; // 문자열
        let age = 20; // 숫자
        let height = 183.2; // 숫자
        let check = false; // 논리값
        let hobbies = ['축구', '농구', '야구']; // 배열
        let user = {
            id : 'hbb',
            age : 20,
            height : 183.2,
            // hobbies : ['축구', '농구', '야구']
            // 값으로 위에있는 배열을 준 것.
            // hobbies : hobbies
            // 속성명과 변수명이 같을 경우 생략가능.
            hobbies,
            // 메소드도 추가 가능.
            // 메소드 : 객체내부에 포함되어있음
            // 함수 : 객체랑 상관없이 동작
            addFunc : function(){
            }
        }; // 객체를 만드는 리터럴
        let func = function (x,y) {
            return x + y;
        } // 함수
        let div1 = document.getElementById('div1');

        console.log(func(10,20));

        // typeof -> 값의 자료형을 확인하는 연산자
        div1.innerHTML = '<b>hello</b><br>';
        div1.innerHTML += `name : ${name}, type : ${typeof(name)}<br><br>`
        div1.innerHTML += `age : ${age}, type : ${typeof(age)}<br><br>`
        div1.innerHTML += `height : ${height}, type : ${typeof(height)}<br><br>`
        div1.innerHTML += `check : ${check}, type : ${typeof(check)}<br><br>`
        div1.innerHTML += `hobbies : ${hobbies}, type : ${typeof(hobbies)}<br><br>`
        div1.innerHTML += `user : ${user}, type : ${typeof(user)}<br><br>`
        div1.innerHTML += `func : ${func}, type : ${typeof(func)}<br><br>`
    }

    // 3. 데이터 형변환
    // 1) 문자열과 숫자의 '+' 연산
    function plustTest(){
        let result1 = 7 + 7; // 14
        let result2 = 7 + '7'; // 77 문자열로 연결연산됨
        let result3 = '7' + 7; // 77 문자열로 연결연산됨
        let result4 = 7 + 7 + '7'; // 147
        let result5 = 7 + '7' + 7; // 777
        let result6 = 7 * '7'; // 49
        let result7 = '7' - 3; // 4
        let result8 = 4 / '2' + 3; // 5
        let result9 = '2' * '7'; // 14 전부 숫자여야지 계산할 수 있기 때문에
        let result10 = 'a' * '7'; // NaN (Not a Number)

        let div2 = document.getElementById('div2');

        div2.innerHTML = '<b>hello</b><br>';
        div2.innerHTML += `result1 : ${result1}<br>`;
        div2.innerHTML += `result2 : ${result2}<br>`;
        div2.innerHTML += `result3 : ${result3}<br>`;
        div2.innerHTML += `result4 : ${result4}<br>`;
        div2.innerHTML += `result5 : ${result5}<br>`;
        div2.innerHTML += `result6 : ${result6}<br>`;
        div2.innerHTML += `result7 : ${result7}<br>`;
        div2.innerHTML += `result8 : ${result8}<br>`;
        div2.innerHTML += `result9 : ${result9}<br>`;
        div2.innerHTML += `result10 : ${result10}<br>`;
    }

    // 2) 형변환 함수
    function castingTest(){
        let div3 = document.getElementById('div3');

        // 문자 => 숫자 parseInt(), parseFloat()
        // 문자타입의 변수를 숫자타입으로 형변환 (생성자함수) (생성자 함수와 일반 함수를 구분 : 생성자는 new를 사용 가능)
        div3.innerHTML += `${Number('3')}, type : ${typeof(Number('3'))}<br>`;
        // 일반함수
        div3.innerHTML += `${parseInt('3')}, type : ${typeof(parseInt('3'))}<br>`;
        // 16진수를 정수로 바꾸면서 10진수로 바꿔줌
        div3.innerHTML += `${parseInt('0xff, 16')}, type : ${typeof(parseInt('0xff, 16'))}<br>`;
        div3.innerHTML += `${parseFloat('3')}, type : ${typeof(parseFloat('3'))}<br>`;
        
        // 숫자 => 문자 String()
        div3.innerHTML += `${String(3)}, type : ${typeof(String(3))}<br>`;
    }

    // 4. 연산자 
    function opTest(){
        let div4 = document.getElementById('div4');

        div4.innerHTML = '"==" 연산자 테스트<br>';
        div4.innerHTML += `'7' == 7 : ${'7' == 7}<br> `; // true
        div4.innerHTML += `'7' == '7' : ${'7' == '7'}<br> `; // true
        div4.innerHTML += `7 == 7 : ${7 == 7}<br> `; // true
        
        div4.innerHTML = '"===" 연산자 테스트<br>';
        div4.innerHTML += `'7' === 7 : ${'7' === 7}<br> `; // false
        div4.innerHTML += `'7' === '7' : ${'7' === '7'}<br> `; // true
        div4.innerHTML += `7 === 7 : ${7 === 7}<br> `; // true
    }

    // 5. 제어문
    // 1) for in / for of 구문
    function forinTest(){
        let div5 = document.getElementById('div5'); 
        let arr = ['김삿갓', '홍길동', '이몽룡', '성춘향'];
        let obj = {
            name : '김삿갓',
            age : 20,
            job : '강사'
        }

				// for문
        // 김삿갓 홍길동 이몽룡 성춘향
        for(let i=0; i<arr.length; i++){
            div5.innerHTML += `${arr[i]}  `;
        }

				// for in문
        // 0, 김삿갓 1, 홍길동 2, 이몽룡 3, 성춘향
        div5.innerHTML += '<br><br>';
        for (const key in arr){
            div5.innerHTML += `${key}, ${arr[key]}  `;
        }

				// for of문
        // 김삿갓 홍길동 이몽룡 성춘향
        div5.innerHTML += '<br><br>';
        for (const iterator of arr){
            div5.innerHTML += `${iterator}  `;
        }

				// for in문
        // name, 김삿갓 age, 20 job, 강사
        div5.innerHTML += '<br><br>';
        for (const key in obj){
            div5.innerHTML += `${key}, ${obj[key]}  `;
        }
    }