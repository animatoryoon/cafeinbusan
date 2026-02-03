$(document).ready(function () {
  var jbOffset = $('header').offset();
  /*선택자는 본인 구조에 맞게 수정*/
  $(window).scroll(function () {
    if ($(document).scrollTop() > 490) {//여기 지정된 길이 이후부터 적용됩니다
      $('header').addClass("white_bg");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
    else {
      $('header').removeClass("white_bg");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
  });

  $("#gnb>li").mouseover(function () {
    $(this).children(".sub").stop().slideDown();
    // 여기서 stop은, slideDown이 전부 되기 전에 행동이 취소 되었을 때, slideDown을 도중에 중지하고 다음 행동으로 넘어간다는 뜻이다
  });
  /* .gnb>li에서 마우스가 나가면 .sub가 슬라이드 되어 올라간다. */
  $("#gnb>li").mouseout(function () {
    $(this).children(".sub").stop().slideUp();
  });

  $("#top_btn").click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $("#history_btn").click(function () {
    $("#history_list").fadeIn();
  });
  $(".close").click(function () {
    $("#history_list").hide();
    /* fadeOut 대신에 hide로 바꿀 수 있다 */
  });

});/* 끝 */