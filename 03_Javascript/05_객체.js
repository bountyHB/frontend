window.onload = function(){
    // 1. 객체 생성
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        let product = {
            0 : '배열 흉내',
            name : 'iphone 12',
            price : 1000000,
            brand : 'samsung',
            brand : 'apple', // 중복 선언 시, 마지막에 선언된 프로퍼티가 덮어쓴다.
            spec : ['oled', 'ios15', '8Inch', 'white']
        };

        console.log(product);

        // 속성명을 제시할 때 공백이나 특수문자가 들어가야 하는 경우 ''/""로 묶어줘야 한다.
        let user = {
            'user name' : '김삿갓',
            'user-age' : 24,
            'job!!' : 'poet'
        }

        div1.innerHTML = `객체["속성명"]으로 접근하는 방법<br>`; 
        div1.innerHTML += `product[0] : ${product[0]}<br>`; // 숫자형태는 '' 생략가능
        div1.innerHTML += `product['name'] : ${product['name']}<br>`; 
        div1.innerHTML += `product['price'] : ${product['price']}<br>`; 
        div1.innerHTML += `product['brand'] : ${product['brand']}<br>`; 
        div1.innerHTML += `product['spec'] : ${product['spec']}<br>`; // oled,ios15,8Inch,white
        div1.innerHTML += `product['spec'] : ${product['spec'][2]}<br><br>`; //8Inch
        
        div1.innerHTML += `product.속성명으로 접근하는 방법<br>`; 
        // div1.innerHTML += `product.0 : ${product.0}<br>`; // 숫자형태는 .으로 접근 불가능하다 
        div1.innerHTML += `product.name : ${product.name}<br>`; 
        div1.innerHTML += `product.spec : ${product.spec}<br>`; 
        div1.innerHTML += `product.spec[2] : ${product.spec[2]}<br><br>`; // 8Inch 

        div1.innerHTML += `공백이나 특수문자가 속성명에 있는 경우 대괄호를 이용해서 값을 가져와야 한다.<br>`; 
        div1.innerHTML += `user['user name'] : ${user['user name']}<br>`; 
        div1.innerHTML += `user['user-age'] : ${user['user-age']}<br>`; 
        div1.innerHTML += `user['job!!'] : ${user['job!!']}<br>`; 

    });

    // 2. 메소드
    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function(){
        let name = '김삿갓';
        
        let cat ={
            name : '망고',
            kind : '레포샴',
            eat : function(food){
                // 객체 내부의 속성에 접근하기 위해서는 반드시 this.속성명 으로 작성해야한다.
                // 지역변수가 선언되지 않아도 지역변수가 호출되기 때문.
                // console.log(this.name);
                console.log(`${this.kind} ${this.name}가 ${food} 먹는즁`);
                // console.log(food);

            }
        }
        cat.eat('츄르');
    });

    // 3. 객체의 속성 추가 및 삭제
    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', ()=>{
        // 빈 객체 생성
        let student = {};

        // 객체에 속성 추가 . 또는 [''] 이용
        student.name = '맹고';
        student['age'] = 22;

        // 객체에 메소드 추가
        // student.whoAreYou = () => {
        student.whoAreYou = function() {
            let str = '';
            
            // 화살표 함수상태에서 this를 하게되면 window를 가리키게 된다.
            // 프로퍼티에 접근(this) 해야하는 경우엔 화살표 함수가 아닌, 익명함수를 사용해야 한다. 
            // console.log(this);

            // for (const key in this) {
            //     console.log(key);
                
            //     if(typeof(this[key]) !== 'function'){
            //         str += `${key} : ${this[key]} `;
            //     }
            // }
            return str;
        }

        console.log(student);
        console.log(student.whoAreYou());

        delete student.age;
        delete student['name'];

        console.log(student);
    })

    // 4. 객체 배열
    let btn4 = document.getElementById('btn4');
    btn4.addEventListener('click', ()=>{
        let div4 = document.getElementById('div4');
        
        // 배열을 사용하지 않았을 경우
        let student1 = {name: '김삿갓', java:100, oracle:80};
        let student2 = {name: '홍길동', java:70, oracle:60};
        let student3 = {name: '이몽룡', java:10, oracle:20};
        let student4 = {name: '백구', java:80, oracle:80};
        let student5 = {name: '망고', java:20, oracle:20};
        
        // console.log(student1);
        // console.log(student2);
        // console.log(student3);
        // console.log(student4);
        // console.log(student5);

        student1.getSum = function(){

        }
        student2.getSum = function(){

        }

        // 배열 선언 및 초기화. []과 {}이용
        let students = [
            {name: '김삿갓', java:100, oracle:80},
            {name: '홍길동', java:70, oracle:60}
        ];

        // 배열에 객체 추가. push()
        students.push(student3);
        students.push({name: '백구', java:80, oracle:80});

        // 배열에 담겨있는 모든 객체에 메소드 추가. for문
        for(let i=0; i<students.length; i++){
            students[i].getSum = function(){
                return this.java + this.oracle;
            };
            
            students[i].getAvg = function(){
                return this.getSum() / 2;
            };
        }

        console.log(students);
        
        // 모든 학생의 정보를 출력(이름, 총점, 평균). for of문
        for (const element of students) {
            div4.innerHTML += `이름 : ${element.name}, 총점 : 
            ${element.getSum()}, 평균: ${element.getAvg()}<br>`;
        }
    });

    // 5. 생성자 함수
    // 시작은 대문자 (파스칼 케이스)
    function Student(name, java, oracle){
        // 속성 정의
        // this를 붙이면 생성자함수로 변화해서 색깔이 바뀜
        this.name = name;
        this.java = java;
        this.oracle = oracle;

        // 메소드 정의;
        // this.getSum = function(){
        //     return this.java + this.oracle;
        // };
        
        // this.getAvg = function(){
        //     return this.getSum() / 2;
        // };
    }

        // 셍성자함수의 프로토타입 이용 (공통사항만 넣어놓기)
        Student.prototype.getSum = function(){
            return this.java + this.oracle;
        };

        Student.prototype.getAvg = function(){
            return this.getSum() / 2;
        };


    let btn5 = document.getElementById('btn5');
    btn5.addEventListener('click', function(){
        let div5 = document.getElementById('div5');
        let student = new Student('김삿갓', 80, 80);
        let students = [];

        students.push(student);
        students.push(new Student('홍길동', 60, 60));
        students.push(new Student('이몽룡', 50, 50));
        students.push(new Student('백구', 90, 90));

        console.log(student);
        console.log(student instanceof Student); // true
        console.log(student instanceof Array); // false
        console.log(students);

        // 모든 학생의 정보를 출력(이름, 총점, 평균). for of문
        for (const element of students) {
            div5.innerHTML += `이름 : ${element.name}, 총점 : 
            ${element.getSum()}, 평균: ${element.getAvg()}<br>`;
        }
    })

    // 6. 캡슐화
    function IdolGroup(n, m){
        let name = n;
        let members = m;

        this.getGroupName = function(){
            return name;
        }

        this.getMembers = function(){
            return members;
        }

        this.getMemberCount = function(){
            return members.length;
        }

        this.setGroupName = function(n){
            name = n;
        }

        this.setMembers = function(m){
            members = m;
        }
    }

    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click', function(){
        let div6 = document.getElementById('div6');

        let idol = new IdolGroup('IVE' , ['유진', '가을', '레이', '리즈', '원영', '이서']);

        // 출력해보면 get, set 함수들만 있음.
        console.log(idol);

        idol.setGroupName('아이들');
        idol.setMembers(['미연','민니','소연','우기','슈화']);

        div6.innerHTML = `그룹명 : ${idol.getGroupName()}, 멤버 : ${idol.getMembers()}, 멤버수 : ${idol.getMemberCount()}명`;
    });

    // 7. 

    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click', function(){
        let div7 = document.getElementById('div7');
    
        // Date 객체를 생성하는 방법
        let date1 = new Date();
        let date2 = new Date(2);
        let date3 = new Date('2022-06-21T20:17:50');
        let date4 = new Date('2022/06/21 20:17:50');
        let date5 = new Date(2022, 5, 21, 11, 21, 30); // 월은 0부터 시작

        div7.innerHTML = `Date 객체 <br><br>`;
        div7.innerHTML += `Date1: ${date1}<br>`; // GMT 한국표준시 출력
        div7.innerHTML += `Date2: ${date2}<br>`; // 1970년 09시로 출력
        div7.innerHTML += `Date3: ${date3}<br>`; // 
        div7.innerHTML += `Date4: ${date4}<br>`; // 
        div7.innerHTML += `Date5: ${date5}<br><br>`; // 
        
        // Date 객체의 메소드 호출
        div7.innerHTML += `getFullYear: ${date1.getFullYear()}<br>`; // 2022
        div7.innerHTML += `getMonth: ${date1.getMonth()}<br>`; // 5 (0부터 시작하기 때문)
        div7.innerHTML += `getDate: ${date1.getDate()}<br>`; // 21
        div7.innerHTML += `getDay: ${date1.getDay()}<br>`; // 2 (0 일요일 ~ 6 토요일)
        div7.innerHTML += `getHours: ${date1.getHours()}<br>`; 
        div7.innerHTML += `getMinutes: ${date1.getMinutes()}<br>`; 
        div7.innerHTML += `getSeconds: ${date1.getSeconds()}<br>`; 
        div7.innerHTML += `getMilliseconds: ${date1.getMilliseconds()}<br>`;
        // 1970년 1월 1일 00시를 기준으로 현재 시간에대한 밀리 세컨드 값을 반환한다. 
        div7.innerHTML += `getTime: ${date1.getTime()}<br>`; 
        // 표준시와 Date 객체에 지정된 시간과의 차이를 분 단위로 반환한다.
        div7.innerHTML += `getTimezoneOffset: ${date1.getTimezoneOffset()}<br>`; // 540 
        div7.innerHTML += `toDateString: ${date1.toDateString()}<br>`; // Tue Jun 21 2022
        div7.innerHTML += `toTimeString: ${date1.toTimeString()}<br>`; 

    });







}
