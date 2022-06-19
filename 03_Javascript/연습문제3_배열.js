window.onload = function(){
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');
    let btn5 = document.getElementById('btn5');
    btn1.onclick = function(){
        let test1 = document.getElementById('test1').value;
        let p1 = document.getElementById('p1').textContent;
        let p2 = document.getElementById('p2').textContent;
        let p3 = document.getElementById('p3').textContent;
        let p4 = document.getElementById('p4').textContent;
        let arr1 = (p1 + ',' + p2 + ',' + p3 + ',' + p4);
        let arr = arr1.split(',');

        // console.log(arr.indexOf('당근'));
        // console.log(arr);
        // console.log(arr.indexOf(test1)+1);

        // alert('답이나옴당';

        if (arr.indexOf(test1)>=0) {
            alert(`${arr.indexOf(test1)+1}번째에 위치하고 있어용`);
        }else {
            alert('존재하지 않습니다.');
        }
    }

    btn2.onclick = function(){
        let p5 = document.getElementById('p5').textContent;
        let p6 = document.getElementById('p6').textContent;
        let div1 = document.getElementById('div1');
        // p5를 공백기준으로 나눈뒤 정렬 + , + p6을 공백기준으로 나눈뒤 뒤집어 정렬 
        let ha = (p5.split(' ').sort()) + ',' + (p6.split(' ').reverse()) // b,k,l,o,v,e
        // b,k,l,o,v,e 를 ,기준으로 나눈뒤 조인()으로 배열을 문자열로 변환
        // join() : 매개변수가 없을시 배열을 ,로 구분하여 문자열로 합쳐줌
        let ho = ha.split(',').join('');

        console.log(ha);
        console.log(ho);

        div1.innerHTML = ho;
    }

    let data = [];

    btn3.onclick = function(){
        let input = document.getElementById('input').value;        
        data.push(input);
        // console.log(data);
    }

    btn4.onclick = function(){
        let output = document.getElementById('output');
        let outcome = data.sort().reverse();
        let str = outcome.join();

        // console.log(outcome);
        // console.log(str);
        output.innerHTML = str;
    }

    btn5.onclick = function(){
        let test4 = document.getElementById('test4').textContent;
        let div2 = document.getElementById('div2');
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        
        // 보기에 있는 값 들을 배열로 변경
        let arr2 = test4.split(' ');

        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i] === input1) {
                arr2.splice(i, 1);
                
                break;
            }
        }
        arr2.push(input2);
        div2.innerHTML = arr2.join(' ');
    }
    

}