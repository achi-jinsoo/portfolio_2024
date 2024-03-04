$(function () {

    //마우스휠 이벤트
    $('.section_all section.typewriter').on('wheel', function (e) {
        e.preventDefault();
        let nav;
        if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
            nav = $(this).next();
        }

        if (nav.length) {
            let moveTop = nav.offset().top;
            $('html,body').stop().animate({
                scrollTop: moveTop
            }, 1400);
        }
    });

    //커서 움직임 효과
    $(document).mousemove(function (e) {
        gsap.to(".cursor", { duration: 0.4, left: e.pageX - 5, top: e.pageY - 5 });
    });
    //커서 오버 효과2
    $(".qck_project ").hover(function () {
        $(this).parent().parent().siblings('.cursor').addClass("active2");
    }, function () {
        $(this).parent().parent().siblings('.cursor').removeClass("active2");
    });

    //헤더 메뉴
    $('.hd_menu .menu_btn').click(function () {
        $(this).parent('.hd_menu').toggleClass('on');
        $(this).parent().parent('header').toggleClass('on');
    });
    //프로젝트 버튼 클릭
    $('.p_contents .inner .slide_btn div').click(function () {
        $(this).toggleClass('on').siblings().removeClass('on');
        let idx = $(this).index();
        $('.p_contents .web .w_left section').eq(idx).addClass('on').siblings().removeClass('on');
        $('.p_contents .web .w_right section').eq(idx).addClass('on').siblings().removeClass('on');
    });
    /* 구름 이동 스크롤 이벤트 시작 */
    $(window).scroll(function () {
        let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
        //console.log(st);
        let cloudMove = $('.qck_gbook').offset().top - 200; //이벤트가 스크롤 될 위치를 evTop에 저장
        let cloudMove2 = $('main').offset().top;
        //이벤트 컨텐츠 액션 시작
        if (st >= cloudMove) {
          $('.cloud1').addClass('on');
          $('.cloud2').addClass('on');
        } else {
          $('.cloud1').removeClass('on');
          $('.cloud2').removeClass('on');
        }
        //이벤트 컨텐츠 액션 끝
        //이벤트 컨텐츠 액션 시작
        if (st >= cloudMove2) {
            $('.cloud1').addClass('on');
            $('.cloud2').addClass('on');
        } else {
            $('p_contents .cloud1').removeClass('on');
            $('p_contents .cloud2').removeClass('on');
        }
        //이벤트 컨텐츠 액션 끝
    });
    /* 스크롤 이벤트 끝 */
});