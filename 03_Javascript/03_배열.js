// 윈도우 온로드 이벤트가 실행될시(화면로드),실행될 코드를 작성
window.onload = function(){
    // 1. 배열의 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    // 클릭 이벤트가 실행될시 함수가 실행 됨.
    btn1.onclick = function(){
        let arr1 = []; // 리터럴 사용. []
        let arr2 = new Array(); // new Array를 붙임. []
        let arr3 = new Array(3); // [비어있음 * 3] 
        let arr4 = new Array('빨강', '노랑', '파랑', '초록'); // ['빨강', '노랑', '파랑', '초록'] 
        let arr5 = ['java', 'oracle','html5','css3','javascript']; // ['java', 'oracle', 'html5', 'css3', 'javascript']
        let arr6 = [
            '김삿갓',
            20,
            true,
            [1,2,3,4],
            {},
            function(){}
        ];
        let div1 = document.getElementById('div1');

        console.log(arr1, arr2, arr3, arr4, arr5);

        // 크기 지정을 하지 않았지만, 이런식으로도 배열에 접근이 가능하다.
        arr1[0] = '귤';
        arr1[1] = '수박';
        arr1[2] = '메론';

        arr2[0] = '벤츠';
        arr2[1] = '아우디';
        arr2[2] = 'bmw';
        arr2[3] = '페라리';

        div1.innerHTML = 'Hello<br>'
        div1.innerHTML = `arr1 : [${arr1}] arr1.length : ${arr1.length}<br>`;
        div1.innerHTML += `arr2 : [${arr2}] arr1.length : ${arr2.length}<br>`;
        div1.innerHTML += `arr3 : [${arr3}] arr1.length : ${arr3.length}<br>`;
        div1.innerHTML += `arr4 : [${arr4}] arr1.length : ${arr4.length}<br>`;
        div1.innerHTML += `arr5 : [${arr5}] arr1.length : ${arr5.length}<br>`;
        div1.innerHTML += `arr6 : [${arr6}] arr1.length : ${arr6.length}<br>`;
    }

    let btn2= document.getElementById('btn2');

    btn2.addEventListener('click', function(){
        let div2 = document.getElementById('div2');

        // 1. indexOf() 인덱스로 배열의 값을 가져옴
        // let array = ['망고', '복숭아', '수박', '포도', '사과'];
        
        // div2.innerHTML = `array : [${array}] indexOf()<br>`;
        // div2.innerHTML += `indexOf('망고') : ${array.indexOf('망고')}<br>`;
        // div2.innerHTML += `indexOf('사과') : ${array.indexOf('사과')}<br>`;
        // div2.innerHTML += `indexOf('토마토') : ${array.indexOf('토마토')}<br>`; // 없는 배열은 -1 출력
        
        // 2. concat() 여러개의 배열을 합쳐줌 
        // let array1 = ['망고', '복숭아', '수박', '포도', '사과'];
        // let array2 = ['바나나', '오렌지', '딸기', '귤', '자몽'];
        
        // div2.innerHTML = `array1 : [${array1}]<br>`;
        // div2.innerHTML += `array2 : [${array2}]<br><br>`;
        // div2.innerHTML += `array1을 기준으로 배열을 결합 : [${array1.concat(array2)}] <br>`;
        // div2.innerHTML += `array1 : [${array1}]<br><br>`; // concat은 원본배열에 영향을 미치지 않는다.
        // div2.innerHTML += `array2를 기준으로 배열을 결합 : [${array2.concat(array1)}] <br>`;
        // div2.innerHTML += `array2 : [${array2}]<br>`; // concat은 원본배열에 영향을 미치지 않는다.
        
        // 3. toString() / join()
        // let array = ['망고', '복숭아', '수박', '포도', '사과'];
        // // 배열 객체를 하나의 문자열로 만들어 리턴 
        // div2.innerHTML += `array.toString() : [${array.toString()}]<br>`;
        // // 구분자를 변경해 줄 수 있음 (기본값은 ,)
        // div2.innerHTML += `array.join('|') : [${array.join('|')}]<br>`;
        
        // 4. sort()
        // let array1 = ['Apple','Cherry','apple','Banana'];
        // let array2 = [10, 234, 30, 530, 123, 773];
        
        // div2.innerHTML = `array1 : [${array1}]<br>`;
        // div2.innerHTML = `array2 : [${array2}]<br>`;
        // div2.innerHTML += `array1.sort() : [${array1.sort()}]<br>`; // [Apple,Banana,Cherry,apple]
        // div2.innerHTML += `array2.sort() : [${array2.sort()}]<br>`; // [10,123,234,30,530,773]
        // // sort()는 원본배열에 영향을 미친다.
        // div2.innerHTML += `array1 : [${array1}]<br>`; // [Apple,Banana,Cherry,apple]
        // div2.innerHTML += `array2 : [${array2}]<br>`; // [10,123,234,30,530,773]
        
        // compareTo()랑 같음. 
        // array2.sort((left, right)=>{
        //     return left-right;
        // });
        
        // return과 중괄호 생략 가능. arrow 함수 (화살표 함수)
        // 오름차순
        // array2.sort((left, right)=>left-right);
        // 내림차순
        // array2.sort((left, right)=>right-left);
        // div2.innerHTML += `array2 : [${array2}]<br>`; // [10,30,123,234,530,773]
        
        
        // 5. reverse() 순서를 반전해준다
        // let array = Array.of(10, 5, 3 ,6 ,1 ,4); 
        // div2.innerHTML = `array : [${array}]<br>`;
        // div2.innerHTML += `array.reverse : [${array.reverse()}]<br>`;
        // // reverse()는 원본배열에 영향을 미친다.
        // div2.innerHTML += `array : [${array}]<br>`;
        
        // 6. push(), pop()
        // let array = ['프랭크', '오션', '타일러'];
        // // push
        // div2.innerHTML = `array : [${array}]<br>`; // [프랭크,오션,타일러]
        // // array.push('blonde');
        // div2.innerHTML += `array.push : [${array.push('blonde')}]<br>`; // [4] push후의 배열의 length를 리턴
        // div2.innerHTML += `array : [${array}]<br>`; // [프랭크,오션,타일러,blonde]
        // div2.innerHTML += `array.push : [${array.push('white')}]<br>`; // [5] push후의 배열의 length를 리턴
        // div2.innerHTML += `array : [${array}]<br><br>`; // [프랭크,오션,타일러,blonde,white]
        
        // //pop()
        // div2.innerHTML += `array.pop() : [${array.pop()}]<br>`; // [white] 마지막 요소
        // div2.innerHTML += `array : [${array}]<br>`; // [프랭크,오션,타일러,blonde] 마지막 요소가 지워져있음
        // div2.innerHTML += `array.pop() : [${array.pop()}]<br>`; // [blonde] 마지막 요소
        // div2.innerHTML += `array : [${array}]<br>`; // [프랭크,오션,타일러] 마지막 요소가 지워져있음
        
        // 7. unshift() , shift()
        // let array = ['프랭크', '오션', '타일러'];
        
        // div2.innerHTML += `array : [${array}]<br>`; // [프랭크,오션,타일러]
        // div2.innerHTML += `array.unshift() : [${array.unshift('머랭')}]<br>`; // [4]
        // div2.innerHTML += `array : [${array}]<br>`; // [머랭,프랭크,오션,타일러]
        // div2.innerHTML += `array.unshift() : [${array.unshift('쿠키')}]<br>`; // [5]
        // div2.innerHTML += `array : [${array}]<br><br>`; // [쿠키,머랭,프랭크,오션,타일러]
        
        // div2.innerHTML += `array : [${array}]<br>`; // [쿠키,머랭,프랭크,오션,타일러]
        // div2.innerHTML += `array.shift() : [${array.shift()}]<br>`; // [쿠키]
        // div2.innerHTML += `array : [${array}]<br>`; // [머랭,프랭크,오션,타일러]
        // div2.innerHTML += `array.shift() : [${array.shift()}]<br>`; // [머랭]
        // div2.innerHTML += `array : [${array}]<br><br>`; // [프랭크,오션,타일러]
        
        // 8. slice(), splice()
        let array = ['프랭크', '오션', '타일러', 'red', 'white'];
        
        // slice()
        div2.innerHTML += `array : [${array}]<br>`; // [프랭크,오션,타일러,red,white]
        div2.innerHTML += `array.slice(2) : [${array.slice(2)}]<br>`; // [타일러,red,white]
        div2.innerHTML += `array.slice(2,4) : [${array.slice(2,4)}]<br>`; // [타일러,red]
        // slice()는 원본배열에 영향을 미치지 않는다.
        div2.innerHTML += `array : [${array}]<br><br>`; // [프랭크,오션,타일러,red,white]
        
        // splice()
        div2.innerHTML += `array : [${array}]<br>`; // [프랭크,오션,타일러,red,white]
        div2.innerHTML += `array.splice(2,2) : [${array.splice(2,2)}]<br>`; // [타일러,red]
        // splice()는 원본배열에 영향을 미친다.
        div2.innerHTML += `array : [${array}]<br>`; // [프랭크,오션,white]
        div2.innerHTML += `array.splice(2,2) : [${array.splice(2,2)}]<br>`; // [white]
        div2.innerHTML += `array : [${array}]<br>`; // [프랭크,오션]
        div2.innerHTML += `array.splice(1,0,'프랭크') : [${array.splice(1,0,'프랭크')}]<br>`; // []
        div2.innerHTML += `array : [${array}]<br>`; // [프랭크,프랭크,오션]
        });
}

