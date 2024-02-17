$(function () {

  //마우스휠 이벤트
  $('.section_all section.typewriter').on('wheel', function (e) {
    e.preventDefault();
    let nav;
    if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
      nav = $(this).next();
    }

    if (nav.length > 0) {
      let moveTop = nav.offset().top;
      $('html,body').stop().animate({
        scrollTop: moveTop
      }, 1400);
    }
  });
  //마우스휠 이벤트2
  $('.hover_area').on('wheel', function (e) {
    e.preventDefault();
    let nav2;
    if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
      nav2 = $(this).next();
    }

    if (nav2.length > 0) {
      let moveTop2 = nav2.offset().top;
      $('html,body').stop().animate({
        scrollTop: moveTop2
      }, 1400);
    }
  });


  //메인 타이핑 효과
  let typeText = document.querySelector(".typeText")
  let textToBeTyped = "자바스크립트"
  let textToBeTypedArr = ["리액트", "프론트엔드", "HTML/CSS", "제이쿼리"]
  let typingIndex = 0, isAdding = true, textToBeTypedIndex = 0

  function playAnim() {
    setTimeout(function () {
      // set the text of typeText to a substring of the text to be typed using index.
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, typingIndex)
      if (isAdding) {
        // adding text
        if (typingIndex > textToBeTypedArr[textToBeTypedIndex].length) {
          // no more text to add
          isAdding = false
          //break: wait 2s before playing again
          setTimeout(function () {
            playAnim()
          }, 1500)
          return
        } else {
          // increment index by 1
          typingIndex++
        }
      } else {
        // removing text
        if (typingIndex === 0) {
          // no more text to remove
          isAdding = true
          //switch to next text in text array
          textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
        } else {
          // decrement index by 1
          typingIndex--
        }
      }
      // call itself
      playAnim()
    }, isAdding ? 120 : 60)
  }
  // start animation
  playAnim()


  //마우스 하단 클릭시 이미지 나타나는 효과
  let imgpointer = document.getElementById('imgpointer');
  $('.hover_area').click(function () {
    let displayH = $('.display').offset().top;
    $('html, body').stop().animate({ scrollTop: displayH }, 2000);
  });



  //타이핑 효과
  let typingTxt = $('.typing-txt').text().split('');//한글자씩 자름
  let typingIndex2 = 0;
  let tyInt;
  let displayH = $('.display').offset().top;
  let displayHB = displayH + $('.display').height();
  $(window).scroll(function () {
    let t = $(this).scrollTop();
    if (t = displayH && t < displayHB) {
      tyInt = setInterval(typing, 1000);
    } else {
      clearInterval(tyInt);
      $('.typing').empty();
    }
  })

  function typing() {
    if (typingIndex2 < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
      $('.typing').stop().append(typingTxt[typingIndex2]); // 한글자씩 이어준다. 
      typingIndex2++;
    }
  };
  //커서 움직임 효과
  $(document).mousemove(function (e) {
    gsap.to(".cursor", { duration: 0.4, left: e.pageX - 5, top: e.pageY - 5 });
  });
  //커서 오버 효과1
  $('.hover_area').hover(function () {
    $(this).siblings('.cursor').addClass('active');
  }, function () {
    $(this).siblings('.cursor').removeClass('active');
  });

  $('.contents .display .dis_p .astronaut').click(function () {
    $(this).toggleClass('on');
    $(this).siblings('.spbb').toggleClass('fade');
    $(this).parent('.right_clk').siblings('.typing').toggleClass('fade');
    $(this).parent('.right_clk').siblings('.my_info').toggleClass('click');
  });

  /* 스크롤 이벤트 시작 */
  $(window).scroll(function () {
    let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
    //console.log(st);
    let strength = $('.display .inner .box_g').offset().top - 500; //이벤트가 스크롤 될 위치를 evTop에 저장

    //이벤트 컨텐츠 액션 시작
    if (st >= strength) {
      $('.display .inner .box_g .st_box').eq(0).addClass('on');
      $('.display .inner .box_g .st_box').eq(1).addClass('on').css({ 'transition-delay': '0.3s' });
      $('.display .inner .box_g .st_box').eq(2).addClass('on').css({ 'transition-delay': '0.6s' });
      $('.display .inner .box_g .st_box').eq(3).addClass('on').css({ 'transition-delay': '0.9s' });
    } else {
      $('.display .inner .box_g .st_box').removeClass('on');
    }
    //이벤트 컨텐츠 액션 끝
  });

    /* 구름 이동 스크롤 이벤트 시작 */
    $(window).scroll(function () {
      let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
      //console.log(st);
      let cloudMove = $('.qck_project').offset().top-200; //이벤트가 스크롤 될 위치를 evTop에 저장
  
      //이벤트 컨텐츠 액션 시작
      if (st >= cloudMove) {
        $('.cloud1').addClass('on');
        $('.cloud2').addClass('on');
      } else {
        $('.cloud1').removeClass('on');
        $('.cloud2').removeClass('on');
      }
      //이벤트 컨텐츠 액션 끝
    });
  /* 스크롤 이벤트 끝 */

  $('.hd_menu .menu_btn').click(function () {
    $(this).parent('.hd_menu').toggleClass('on');
    $(this).parent().parent('header').toggleClass('on');
  });
});