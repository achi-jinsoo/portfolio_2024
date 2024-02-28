$(function () {
    //ham click
    $('header .header_bt .ham').click(function () {
        $(this).toggleClass('on');
    });
    //ham menu
    $('header .header_bt .ham').click(function () {
        $(this).siblings('nav').stop().fadeToggle(200);
        $(this).siblings('.trainAni').stop().fadeToggle(200);
    });
    //map close
    $('main .map_close').click(function () {
        $(this).children('img').toggleClass('on');
        $(this).siblings('.inner').toggleClass('on');
    });
    //map tap
    $('.reserv .reserv_rt section h2').click(function () {
        $(this).parent('section').addClass('on').siblings().removeClass('on');
    });
    //map click
    $('.reserv .reserv_rt section ul.spot li').click(function () {
        $(this).toggleClass('on1').siblings().removeClass('on1');
        if ($('.reserv .reserv_rt section ul.spot li').hasClass('on1')) {
            $(this).toggleClass('on2').siblings().removeClass('on2');
        }
    });
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    /* 메인 슬라이드 시작 */
    let slideI = 0;
    const slideLength = $('.k_banner ul.slide li').length - 1;
    $('.k_banner ul.slide li').eq(slideI).siblings().hide();
    let inter = setInterval(goSlide, 5000);
    function goSlide() {
        if (slideI < slideLength) {
            slideI++;
        } else {
            slideI = 0;
        }
        rollingSlide();
    }
    function backSlide() {
        if (slideI == 0) {
            slideI = slideLength;
        } else {
            slideI--;
        }
        rollingSlide();
    }

    function rollingSlide() {
        $('.k_banner ul.slide li').eq(slideI).siblings().fadeOut();
        $('.k_banner ul.slide li').eq(slideI).fadeIn();
        $('.k_banner ul.pager li').removeClass('active').eq(slideI).addClass('active');
    }

    $('.pause_play .pause').click(function () {
        clearInterval(inter);
    });
    $('.pause_play .play').click(function () {
        inter = setInterval(goSlide, 3000);
    });

    $('.k_banner .ltrt_btn .right_btn').click(function () {
        //인터벌 없애고
        clearInterval(inter);
        //슬라이드 돌게
        goSlide();
        //인터벌 세팅
        inter = setInterval(goSlide, 3000);
    });
    $('.k_banner .ltrt_btn .left_btn').click(function () {
        //인터벌 없애고
        clearInterval(inter);
        //슬라이드 돌게
        backSlide();
        //인터벌 세팅
        inter = setInterval(goSlide, 3000);
    });
    $('.k_banner ul.pager li').click(function () {
        //인터벌 없애고
        clearInterval(inter);
        slideI = $(this).index();
        rollingSlide();
        //인터벌 세팅
        inter = setInterval(goSlide, 3000);
    });
    /* 메인 슬라이드 끝 */

});

// 수량 증가, 감소
function fnCalCount(type, ths) {
    let $input = $(ths).siblings("input[name='pop_out']");
    let tCount = Number($input.val());

    if (type == 'p') {
        if (tCount < 10) $input.val(Number(tCount) + 1);

    } else {
        if (tCount > 0) $input.val(Number(tCount) - 1);
    }
}