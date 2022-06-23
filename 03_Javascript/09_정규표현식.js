let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', ()=>{
    let div1 = document.getElementById('div1');
    // 생성자 함수를 이용한 정규 표현식 객체 생성
    let regExp1 = new RegExp('script');

    // 리터럴을 이용한 정규 표현식 객체 생성
    let regExp2 = /script/;
    let str1 = 'javascript jqueryscript ajax';
    let str2 = 'java jquery ajax';

    console.log(regExp1, typeof(regExp1), regExp1 instanceof RegExp); // /script/ 'object' true
    console.log(regExp2, typeof(regExp2), regExp2 instanceof RegExp); // /script/ 'object' true

    div1.innerHTML = 'RegExp 객체에서 제공하는 메소드 <br>';
    // 정규 표현싟 패턴을 만족하는 값이 있으면 true 없으면 false
    div1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)}<br>`; // true
    div1.innerHTML += `regExp2.test(str2) : ${regExp1.test(str2)}<br>`; // false
    // 정규 표현싟 패턴을 만족하는 값이 있으면 값을 return 없으면 null
    div1.innerHTML += `regExp1.exec(str1) : ${regExp1.exec(str1)}<br>`; // script
    div1.innerHTML += `regExp2.exec(str2) : ${regExp1.exec(str2)}<br>`; // null
    
    div1.innerHTML = 'RegExp 객체를 사용하는 String 메소드 <br>';
    div1.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)}<br>`; // script
    div1.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)}<br>`; // 4 (문자열에서 정규표현식을 만족하는 값이 있을때 시작 인덱스 값)
    // 정규식 만족하는 부분을 쪼개서 배열로 만들어 리턴
    div1.innerHTML += `str1.split(regExp1) : ${str1.split(regExp1)}<br>`; // java, jquery, ajax
    div1.innerHTML += `str1.replace(regExp1) : ${str1.replace('j', 'c')}<br>`; // cavascript jqueryscript ajax
    div1.innerHTML += `str1.replaceAll(regExp1) : ${str1.replaceAll('j','c')}<br>`; // cavascript cqueryscript acax

});


// 2. 플래그 문자
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', ()=>{
    let div2 = document.getElementById('div2');
    let str = 'JAvaScript Jquery Ajax';


    div2.innerHTML = '플래그문자<br><br>';
    // replace() 메소드에서 '$&' 패턴을 만족하는 문자열을 가리킨다. 
    div2.innerHTML += `/a/ : ${str.replace(/a/, '($&)')}<br>`; // JAv(a)Script Jquery Ajax
    div2.innerHTML += `/a/i : ${str.replace(/a/i, '($&)')}<br>`; // J(A)vaScript Jquery Ajax
    div2.innerHTML += `/a/g : ${str.replace(/a/g, '($&)')}<br>`; // JAv(a)Script Jquery Aj(a)x
    div2.innerHTML += `/a/ig : ${str.replace(/a/ig, '($&)')}<br>`; // J(A)v(a)Script Jquery (A)j(a)x
});

// 3.메타 문자
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', ()=>{
    let div3 = document.getElementById('div3');
    
    // 반복검색 
    // {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다.
    // + : 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다. {1,}
    // ? : 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다. {0,1}
    
    let str = 'a aa aaa aaaa';
    div3.innerHTML = '반복 검색<br><br>';
    div3.innerHTML += `/a{1,2}/g : ${str.replace(/a{1,2}/g, '($&)')}<br>`; // (a) (aa) (aa)(a) (aa)(aa)
    // {3} == {3,3} 최소값, 최대값 지정
    div3.innerHTML += `/a{3}/g : ${str.replace(/a{3}/g, '($&)')}<br>`; // a aa (aaa) (aaa)a
    // {2,} 최소값만 지정
    div3.innerHTML += `/a+/g : ${str.replace(/a+/g, '($&)')}<br>`; // a (aa) (aaa) (aaaa)
    div3.innerHTML += `/a?/g : ${str.replace(/a?/g, '($&)')}<br>`; // (a)() (a)(a)() (a)(a)(a)() (a)(a)(a)(a)()

});
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', ()=>{
    let div4 = document.getElementById('div4');
    
    // 문자열의 앞, 뒤 구분
    // ^ : 문자열의 시작을 의미한다.
    // $ : 문자열의 마지막을 의미한다.
    
    let str = 'Javascript\nJQuery\nShellscript\nAjax';
    div4.innerHTML = '문자열의 앞, 뒤 구분<br><br>';
    div4.innerHTML += `/^j/g : ${str.replace(/^j/g, '($&)')}<br>`; 
    div4.innerHTML += `/^j/igm : ${str.replace(/^j/igm, '($&)')}<br>`; 
    div4.innerHTML += `/ipt$/igm : ${str.replace(/ipt$/igm, '($&)')}<br>`; 
});

btn5.addEventListener('click', ()=>{
    let div5 = document.getElementById('div5');

    // OR 검색
    // [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다.
    
    let str = 'Javascript JQuery Ajax';
    div5.innerHTML = 'OR 검색<br><br>';
    div5.innerHTML += `/[aj]/ : ${str.replace(/[aj]/ig, '($&)')}<br>`; // (J)(a)v(a)script (J)Query (A)(j)(a)x
    // [...] 내의 ^는 not의 의미를 가진다. 
    div5.innerHTML += `/[^aj]/ : ${str.replace(/[^aj]/ig, '($&)')}<br>`; // Ja(v)a(s)(c)(r)(i)(p)(t)( )J(Q)(u)(e)(r)(y)( )Aja(x)
    
    str = '123 JavaScript';
    // [...] 내의 -는 범위 지정을 의미한다.
    div5.innerHTML += `/[a-z]/ : ${str.replace(/[a-z]/g, '($&)')}<br>`; // 123 J(a)(v)(a)S(c)(r)(i)(p)(t)
    div5.innerHTML += `/[A-Z]/ : ${str.replace(/[A-Z]/g, '($&)')}<br>`; // 123 (J)ava(S)cript
    div5.innerHTML += `/[0-9]/ : ${str.replace(/[0-9]/g, '($&)')}<br>`; // (1)(2)(3) JavaScript
    
});

btn6.addEventListener('click', ()=>{
    let div6 = document.getElementById('div6');

    // 임의의 문자열 검색
    // .은 임의의 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관없다.
    
    str = '123 JavaScript';
    div6.innerHTML = '임의의 문자열 검색<br><br>';
    div6.innerHTML += `/..../g : ${str.replace(/..../g, '($&)')}<br>`; // (123 )(Java)(Scri)pt
});
    
btn7.addEventListener('click', ()=>{
    let div7 = document.getElementById('div7');

    // 추가 메타 문자
    /*
        \d : 숫자를 의미한다.
        \D : 숫자가 아닌 문자를 의미한다.
        \w : 알파벳, 숫자, 언더 스코어(_)를 의미한다.
        \W : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미한다.
        \s : 공백 문자를 의미한다. (띄어쓰기 ,탭, 줄바꿈)
        \S : 공백 문자가 아닌 문자를 의미한다.
    */

    let str = 'A1 B2 C3 d+4 e:5 ` ffgg77--__-- \t가\n나\n다';
    div7.innerHTML = '추가 메타 문자<br><br>';
    // /[0-9]/g : 숫자
    div7.innerHTML += `/\\d/g : ${str.replace(/\d/g, '($&)')}<br>`; // A(1) B(2) C(3) d+(4) e:(5) ` ffgg(7)(7)--__-- 가 나 다
    // /[^0-9]/g : 숫자가 아닌 문자
    div7.innerHTML += `/\\D/g : ${str.replace(/\D/g, '($&)')}<br>`;
    // /[a-zA-Z0-9_]/g : 알파벳, 숫자, 언더 스코어(_)
    div7.innerHTML += `/\\w/g : ${str.replace(/\w/g, '($&)')}<br>`; // (A)(1) (B)(2) (C)(3) (d)+(4) (e):(5) ` (f)(f)(g)(g)(7)(7)--(_)(_)-- 가 나 다
    // /[^a-zA-Z0-9_]/g : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자
    div7.innerHTML += `/\\W/g : ${str.replace(/\W/g, '($&)')}<br>`; // A1( )B2( )C3( )d(+)4( )e(:)5( )(`)( )ffgg77(-)(-)__(-)(-)( )( )(가)( )(나)( )(다)
    // /[ \t\n] : 공백 문자
    div7.innerHTML += `/\\s/g : ${str.replace(/\s/g, '($&)')}<br>`; // A1( )B2( )C3( )d+4( )e:5( )`( )ffgg77--__--( )( )가( )나( )다
    // /[^ \t\n] : 공백이 아닌 문자
    div7.innerHTML += `/\\S/g : ${str.replace(/\S/g, '($&)')}<br>`; // (A)(1) (B)(2) (C)(3) (d)(+)(4) (e)(:)(5) (`) (f)(f)(g)(g)(7)(7)(-)(-)(_)(_)(-)(-) (가) (나) (다)

});
