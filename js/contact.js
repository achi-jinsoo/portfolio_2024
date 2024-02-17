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

    //헤더 메뉴
    $('.hd_menu .menu_btn').click(function () {
        $(this).parent('.hd_menu').toggleClass('on');
        $(this).parent().parent('header').toggleClass('on');
    });
});