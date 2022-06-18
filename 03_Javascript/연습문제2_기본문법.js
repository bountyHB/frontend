window.onload = function(){
    let btn1 = document.getElementById('btn1');
    btn1.onclick = function(){
        let test1 = document.getElementById('test1').value;
        let div1 = document.getElementById('div1');

        div1.innerHTML = `${test1.length}`;
    }

    let btn2 = document.getElementById('btn2');
    btn2.onclick = function (){
        let field2 = document.getElementById('field2');
        let p2 = document.getElementById('p2');
        let div2 = document.getElementById('div2');

        div2.innerHTML = `${p2}`;
    }

    let brn3 = document.getElementById('btn3');
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2');
    
    btn3.onclick = function(){
        let result = document.getElementById('result');
        
        console.log(input1);
        


        result.innerHTML = `${input1}`;
    }


    let brn4 = document.getElementById('btn4');
    let brn5 = document.getElementById('btn5');
    let brn6 = document.getElementById('btn6');
    let brn7 = document.getElementById('btn7');

}









