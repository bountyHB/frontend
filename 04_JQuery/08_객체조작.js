$(document).ready(function(){


    // 1. Content 설정
    // 1) html() 메소드
    $('#content2').html($('#content1').html());

    // $('content2').find('a').attr('href','https://www.naver.com');
    $('#content2').find('a').prop('href','https://www.naver.com');

    $('.content1').html((index, content)=>{
        // console.log(index, content);
    
        return `<h1>인덱스 : ${index}, 내용 : ${content}</h1>`; 
    }); 
    
    // 2) text() 메소드
    $('#content4').text($('#content3').text());
    
    $('.content2').text((index, content) => {
        // console.log(index, content);
    
        return `<h1>인덱스 : ${index}, 내용 : ${content}</h1>`; 
    });


    // 2. 요소 추가
    // 1) 요소 생성
    // 문자열로 요소를 생성하는 방법
    let p1 = '<p>문자열로 요소를 생성</p>';

    $('#create').html(p1);
    // $('#create').append(p1);
    
    // 제이쿼리로 요소를 생성하는 방법
    let p2 = $('<p>').text('제이쿼리로 요소를 생성1');
    let p3 = $('<p>제이쿼리로 요소를 생성2</p>');
    
    $('#create').append(p1, p2, p3);

    // 2) 요소 추가 1
    // $(A).append(B) : A 요소의 자식 요소로 B 요소를 뒷 부분에 추가한다.
    $('#add1').append('<span>B</span>');
    
    // $(A).prepend(B) : A 요소의 자식 요소로 B 요소를 앞 부분에 추가한다.
    $('#add2').prepend('<span>B</span>');
    
    // $(A).before(B) : A 요소의 형제 요소로 B 요소를 앞 부분에 추가한다.
    $('#add3').before('<span>B</span>');
    
    // $(A).after(B) : A 요소의 형제 요소로 B 요소를 뒷 부분에 추가한다.
    $('#add4').after('<span>B</span>');
    
    // 3) 요소 추가 2
    // $(A).appendTo(B) : A 요소를 B 요소의 자식 요소로 뒷 부분에 추가한다.
    $('<span>B</span>').appendTo('#add5');
    
    // $(A).prependTo(B) : A 요소를 B 요소의 자식 요소로 앞 부분에 추가한다.
    $('<span>B</span>').prependTo('#add6');
    
    // $(A).before(B) : A 요소를 B요소의 형제 요소로 앞 부분에 추가한다.
    $('<span>B</span>').insertBefore('#add7');
    
    // $(A).after(B) :A 요소를 B요소의 형제 요소로 뒷 부분에 추가한다.
    $('<span>B</span>').insertAfter('#add8');


    // 3. 요소 복제
    // 복제할 요소에 이벤트 추가
    $('#item1').hover(
        // (event) => {
        //     // console.log(event.target) 
        //     $(event.target).addClass('bg-hotpink');
        // },
        // (event) => {
        //     // console.log(event.target) 
        //     $(event.target).removeClass('bg-hotpink');
        // }
        (event) => {
            // console.log(event.target)

            $(event.target).toggleClass('bg-hotpink');
            // 아이디로만 찾으면 하나만 가져와서 안됨..
            // $('#item1').toggleClass('bg-hotpink');
        }
    );

    $('#btn1').click(()=>{
        // 요소 복제
        // let copyitem = $('#item1').clone(); // 요소만 복제 (이벤트는 x)
        let copyitem = $('#item1').clone(true); // 요소와 이벤트 모두 복제됨

        // console.log(copyitem);
        $('#clone-result').append(copyitem);
    });


    // 4. 요소 제거
    $('#item2').hover(
        (event) => $(event.target).toggleClass('bg-hotpink')
    );

    // 1) remove 테스트 : 선택된 요소를 제거하고 이벤트 유지 x
    $('#remove').click(()=>{
        let removeItem = $('#item2').remove();

        $('#remove-result').append(removeItem);
    });
    
    // 2) detach 테스트 : 선택된 요소를 제거하고 이벤트 유지 o
    $('#detach').click(()=>{
        let detachItem = $('#item2').detach();

        $('#remove-result').append(detachItem);
    });
    
    // 3) empty 테스트 : 선택된 요소와 하위요소를 제거 이벤트 유지 o
    $('#empty').click(()=>{
        $('#item2').empty();
    });



    // 5. 배열 관리
    let output = '';
    let arr = [
        {name : '네이버', link: 'https://www.naver.com'},
        {name : '구글', link: 'https://www.google.com'},
        {name : 'w3school', link: 'https://www.w3school.com'}
    ];

    //
    // $.each(arr, (index, element)=>{
    //     console.log(`index : ${index}, name: ${element.name}, link : ${element.link}`);
    
    //     output += `<h4><a href="${element.link}">${element.name}</a></h4>`;
    // });

    //
    // $(arr).each((index, element) => {
    //     console.log(`index : ${index}, name: ${element.name}, link : ${element.link}`);
    
    //     output += `<h4><a href="${element.link}">${element.name}</a></h4>`;
    // });
    
    // 자바스크립트에도 동일한 기능을 하는 메소드가 추가되었다. -> 요즘 선호하는 방식
    arr.forEach(function(element, index, origin){
        // console.log(arguments);
        console.log((element, index, origin));
        output += `<h4><a href="${element.link}">${element.name}</a></h4>`;
    });

    $('#each-test').html(output);

    // 요소들을 검색해서 여러개의 요소를 가지고 반복적으로 무언가를 수행할 때.
    $('h4').each((index, element)=>{
        console.log(index, element);
    });

});