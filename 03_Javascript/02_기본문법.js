
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
        // var 키워드로 선언한 변수는 함수 유요 범위를 갖는다.
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
            name : '경가',
            age : 20,
            height : 183.2,
            hobbies : ['축구', '농구', '야구']
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