window.onload = function(){
    let btn1 = document.getElementById('btn1');
    btn1.onclick = function(){
        let test1 = document.getElementById('test1').value;
        let div1 = document.getElementById('div1');

        div1.innerHTML = `${test1.length}`;
    }

    let btn2 = document.getElementById('btn2');
    btn2.onclick = function (){
        let p1 = document.getElementById('p1').textContent;
        let div3 = document.getElementById('div3');
        let hey = p1.split(',');

        // console.log(hey);

        for (let i = 0; i<hey.length; i++){
            // div3.innerHTML += `${hey[i]} `;
            div3.innerHTML += hey[i] + ' ';
        }
    }

    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');
    let btn5 = document.getElementById('btn5');
    let btn6 = document.getElementById('btn6');
    let btn7 = document.getElementById('btn7');
    
    btn3.onclick = function(){
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let result = document.getElementById('result');
        
        // console.log(input1);
        // console.log(input2);
        // console.log(input1+input2);

        result.innerHTML = `${parseInt(input1)+parseInt(input2)}`;
        
    }
    btn4.onclick = function(){
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let result = document.getElementById('result');

        result.innerHTML = `${input1-input2}`;
    }
    btn5.onclick = function(){
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let result = document.getElementById('result');

        result.innerHTML = `${input1*input2}`;
    }
    btn6.onclick = function(){
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let result = document.getElementById('result');

        result.innerHTML = `${input1/input2}`;
    }
    btn7.onclick = function(){
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let result = document.getElementById('result');

        result.innerHTML = `${input1%input2}`;
    }

}
