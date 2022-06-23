// $(document).ready()의 축약형
$(function(){
    // 1. 태그(요소) 선택자
    $('h5').css('color','skyblue');
    $('h5, p').css('background-color','pink');

    // 2. 아이디 선택자
    // 1) 자바스크립트 방식
    let id1 = document.getElementById('id1');
    id1.style.color = "seagreen";

    // 2) 제이쿼리 방식
    let id2 = $('#id2').css('color', 'gold');

    // 3) 클래스 선택자 
    // 설정하려는 값이 여러개면 객체 리터럴을 넘길 수 있다.
    // background-color의 경우 하이픈 때문에 '를 생략불가.
    let item = $('.item').css({color : 'orange', 'background-color' : 'beige'});

});