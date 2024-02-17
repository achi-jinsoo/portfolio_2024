$(function(){
    $('.eatz_tv .tv_cont button').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    });
});