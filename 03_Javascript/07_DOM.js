window.onload = function(){
    // 1. 노드 생성
    // 1) 텍스트 노드가 있는 요소 노드 생성    
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function(){
        let div1 = document.getElementById('div1');

        // 기존에 있던 작업 위에 추가됨
        // 요소 노드 생성
        let h3 = document.createElement('h3');

        // 텍스트 노드 생성
        let textNode = document.createTextNode('안녕하세요');

        h3.appendChild(textNode);
        div1.appendChild(h3);

        // 기존에 있던 작업이 사라지고 작성됨
        // div1.innerHTML = '<h3>안녕하세요</h3>';
    });

    // 2) 텍스트 노드가 없는 요소 노드 생성
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener ('click', ()=>{
        let div2 = document.getElementById('div2');

        // 요소 노드 생성
        let img = document.createElement('img');

        // img.src = '../resources/image/flower1.PNG';
        img.setAttribute('src', '../resources/image/flower1.PNG');
        img.setAttribute('width', '300px');
        img.setAttribute('height', '200px');

        div2.appendChild(img);
        // div2.innerHTML = '<img src="../resources/image/flower1.PNG" width="300px" height="200px">';
    });

    // 3) 노드 삭제
    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', function(event) {
        // 특정 요소를 찾아서 삭제
        document.getElementById('div1').remove();
        // 바디 태그의 자식 태그중 하나를 선택해서 제거. 
        document.body.removeChild(document.getElementById('div2'));

        console.log(event.target);
        console.log(event.target.parentNode);

        event.target.parentNode.removeChild(document.getElementById('div3'));

    });

}