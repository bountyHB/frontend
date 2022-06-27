$(document).ready(()=>{

    // 효과
    // 1. show() , hide()

    $('#show').on('click', ()=>{
        // 시간을 주지 않으면 에니메이션 효과가 없음
        // $('#imgCity').show();
        // 기본값 linear로 되어있음
        $('#imgCity').show(15000);
    });
    
    $('#hide').on('click', ()=>{
        // $('#imgCity').hide(1500);
        $('#imgCity').hide(15000);
    });
    
    $('#toggle').on('click', ()=>{
        // 토글 없이 효과를 구현하는 방법
        // if($('#imgCity').css('display') === 'none'){
        //     $('#imgCity').show(15000);
        // }else{
        //     $('#imgCity').hide(15000);
        // }

        // 토글 이용
        $('#imgCity').toggle(1500);
    });


    // 2. slideDown(), slideUp()
    $('.menu').on('click',(event)=>{
        let content = $(event.target).next();
        
        // 토글 없이 효과를 구현하는 방법
        // if(content.css('display') === 'none') {
        //     content.slideDown(500, 'swing');
        // }else {
        //     content.slideUp(500, 'linear');
        // }

        // 토글 이용
        // content.slideToggle(500, 'swing');

        $('.contents').slideUp();
        content.slideDown(500, 'linear');

    });
    
    // 3. fadeIn(), fadeOut(), fadeToggle(), fadeTo()
    $('#fadeIn').on('click', () => {
        $('#imgForest').fadeIn(1000, 'linear');
    });
    
    $('#fadeOut').on('click', () => {
        $('#imgForest').fadeOut(1000, 'linear');
    });
    
    $('#fadeToggle').on('click', () => {
        $('#imgForest').fadeToggle(1500, 'swing');
    });

    $('#imgForest').hover((event) => {
        if(event.type === 'mouseenter'){
            $(event.target).fadeTo(500, 0.5, 'linear');
        }else if (event.type === 'mouseleave'){
            $(event.target).fadeTo(500, 1, 'swing');
        }
    });

});