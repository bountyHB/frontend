$(document).ready(function(){
    // 1. 이벤트 연결
    // 1) on(), off()
    // 콜백함수를 각각 지정 
    // $('#div1').on('mouseenter',(event)=>{
    //     // 제이쿼리에서 제공하는 메소드를 쓰려면 제이쿼리 객체로 감싸주어야 한다.
    //     $(event.target).css('background-color','beige').text('마우스가 올라감');
    // });
    
    // $('#div1').on('mouseleave',(event)=>{
    //     // event.target.style.backgroundColor = 'pink';
    //     $(event.target).css('background-color','pink').text('마우스가 내려감');
    // });
        
    // 여러 이벤트에 하나의 콜백함수를 지정
    // $('#div1').on('mouseenter mouseleave', (event) => {
    //     console.log(event.target); 

    //     if(event.type === 'mouseenter'){
    //         $(event.target).css('background-color','beige').text('마우스가 올라감');
    //     } else if(event.type === 'mouseleave'){
    //         $(event.target).css('background-color','pink').text('마우스가 내려감');
    //     }
        
    // });

    // $('#div1').on('click', (event)=>{
    //     $(event.target)
    //         .css('background-color', 'skyblue')
    //         .text('끝')
    //         // .off('mouseenter')
    //         .off('mouseenter mouseleave');
    // });

    // 콜백함수를 객체의 프로퍼티로 전달
    $('#div1').on({
        mouseenter : (event) => {
            $(event.target).css('background-color','beige').text('마우스가 올라감');
        },
        mouseleave : (event) => {
            $(event.target).css('background-color','pink').text('마우스가 내려감');
        },
        click : (event) => {
            $(event.target)
                .css('background-color', 'skyblue')
                .text('끝')
                .off('mouseenter mouseleave');
            }
            
    });

    // 2) 간단한 연결 이벤트
    $('#div2').mouseenter((event)=>{
        $(event.target).css('background-color','beige').text('마우스가 올라감');
    });
    
    $('#div2').mouseleave((event)=>{
        $(event.target).css('background-color','pink').text('마우스가 내려감');
    });
    
    $('#div2').click((event)=>{
        $(event.target)
            .css('background-color', 'skyblue')
            .text('끝')
            .off('mouseenter mouseleave');
    });
    
    // 3) one()
    $('#div3').one ('click', ()=>{
        alert('처음이자 마지막으로 이벤트 핸들러 실행');
    });

    // 2. 키보드 이벤트
    // 1) keydown(), keypress(), keyup()
    // 한글 구분이 안됨
    // $('#textarea1').keydown((event)=>{
        //     console.log(event);
        //     console.log(`key :${event.key}, keyCode: ${event.keyCode}`);
        // });
        
    // 한글, command shift 인식 안됨 
    // $('#textarea1').keypress((event)=>{
    //     console.log(event);
    //     console.log(`key :${event.key}, keyCode: ${event.keyCode}`);
        
    // });
    
    // 모두 잘 인식됨
    // $('#textarea1').keyup((event)=>{
    //     console.log(event);
    //     console.log(`key :${event.key}, keyCode: ${event.keyCode}`);
    // });
    
    $('#textarea1').on({
        keydown : (event) => {
            console.log(`key :${event.key}, keyCode: ${event.keyCode}`)
        },
        keypress : (event) => {
            console.log(`keypress > key :${event.key}, keyCode: ${event.keyCode}`)
        },
        keyup : (event) => {
            console.log(`keyup > key :${event.key}, keyCode: ${event.keyCode}`)
        }
    });

    // 2) 글자 수 세기
    $('#textarea2').on('keyup', (event) => {
        let target = $(event.target);
        let counter = $('#counter');
        let currentLength = target.val().length;
        let maxLength = parseInt($('#maxLength').text());
        
        console.log(currentLength);
        console.log(maxLength);

        // 글자수가 넘어가면 글자색을 바꾸도록
        // if(currentLength > maxLength){
        //     counter.css('color', 'red');
        // }else {
        //     counter.css('color', 'black');
        // }

        // 글자수가 넘어가면 글자가 짤리도록
        if (currentLength > maxLength){
            target.val(target.val().substr(0,maxLength));
        }

        counter.text(currentLength);
    });

    // 3) 아이디 조건 확인
    $('#userId').keyup((event)=>{
        // 앞에 [a-z] 라는 최소글자 1개가 있기 때문에 3-11으로 범위를 지정
        let regExp = /^[a-z][a-z0-9]{3,11}$/;
        // let id = event.target.value;
        let id = $(event.target).val();

        if (id === null || id === ''){
            $('#idCheck')
            .text('')
            .css({color:'white', fontWeight: 'bold'});
        } else if (regExp.test(id)){
            $('#idCheck')
            .text('사용 가능한 아이디')
            .css({color:'green', fontWeight: 'bold'});
        } else {
            $('#idCheck')
            .text('사용 불가능한 아이디')
            .css({color:'red', fontWeight: 'bold'});
        }
    });

    // 3. trigger()
    // div4 영역을 클릭시 숫자값이 올라가도록
    $('#div4').on('click', ()=> {
        let counter = $('#counter2'); 
        let currentCount = parseInt(counter.text());

        counter.text(++currentCount);
    });

    // 버튼을 누를 때 강제로 클릭 이벤트가 발생하도록
    $('#btn1').on('click', ()=>{
        $('#div4').trigger('click');
    });
});