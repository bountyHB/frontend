$(document).ready(()=>{
    // 1. 자손, 후손 선택자
    $('div>h3').css('color','red');
    // $('div>li').css('color','pink');
    // $('div>ul>li').css('color','pink');

    $('div h3').css('background-color','gold');
    $('div .ch').css('background-color', 'seagreen');

    // 2. 속성선택자
    // $('input[class').css('background-color', 'pink');

    // value() 메소드를 통해 글자 프린트
    $('input[type=text]').val('Change Value'); // text type 속성에 Change Value 출력
    $('input[class~=test1]').val('123456789'); // test1이 들어간 속성에 1233456789 출력
    $('input[type^=ra]').prop('checked', true); // ra로 시작하는 checked 속성을 true로 바꿔줌
    $('input[type$=box]').prop('checked', true); // box로 끝나는 시작하는checked 속성을 true로 바꿔줌
    $('input[class*=st3]').css('width','100px').css('height','100px').val('zzz'); // 메소드체이닝이 가능

    // 3. 입력 양식 선택자
    $(':text').css('background-color', 'pink');
    $(':button').val('왕버튼').css({'width': '100px', 'height':'100px'});
    $(':checkbox').prop('checked',true).css({'width': '50px', 'height':'50px'});
    $(':file').css('background-color','gold');
    $(':image').hover(
        // 마우스가 올라갔을 때
        function(){
            // console.log(this);
            // console.log($(this));
            // $(this).attr('src','../resources/image/flower1.PNG');
            $(this).prop('src','../resources/image/flower1.PNG');
        },
        // 마우스가 빠져나갔을 때
        function(){
            // console.log(this);
            // console.log($(this));
            // $(this).attr('src','../resources/image/flower2.PNG');
            $(this).prop('src','../resources/image/flower2.PNG');
            
        });

    // 4. 입력 양식 상태에 대한 선택자
    // 1) input 태그 중에 활성화된 객체 선택
    $('input:enabled').css('background-color', 'skyblue');
    // 2) input 태그 중에 비활성화된 객체 선택
    $('input:disabled').css('background-color', 'pink');
    // 3) input 태그 중에 checked된 객체 선택
    $('input:checked').css({'width': '50px', 'height':'50px'});
		// 4) checkbox에 change 이벤트 핸들러 등록
    $('input:checkbox').change(function(){
        console.log(this);
        console.dir(this); // 객체로 볼 수 있음
        console.dir($(this));
        console.dir($(this).prop('checked')); // 프로퍼티 값을 줌. 체크하면 true, 해제하면 false
        let checkbox = $(this); // 호출할때마다 객체 만들면 메모리 손실이 있기때문에, 변수에 담아놓기

        if((checkbox.prop('checked'))){
            checkbox.css({'width': '50px', 'height':'50px'});
        }else{
            checkbox.css({'width': '20px', 'height':'20px'});
        }
    });
    
    // 4) checkbox에 change 이벤트 핸들러 등록
    $('#national').change(function(){
        // select 태그의 option 태그 중 선택된 객체를 선택
        let value = $('#national>option:selected').val();

        console.log(value);

        $('#result1').val(value);

    });
    

    $('#hobby').change(function(){
        // select 태그의 option 태그 중 선택된 객체를 선택
        let value = $('#hobby>option:selected').val();

        console.log(value);

        $('#result2').val(value);
    });

});