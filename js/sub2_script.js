$(function () {
    /* 체크박스 슬라이드 다운 */
    $(".district_contents").hide();
    $(".option_contents").hide();

    $(".btn_district").click(function () {
        $(this).next().stop().slideToggle();
        $(this).toggleClass("click_border");
    });
    $(".btn_option").click(function () {
        $(this).next().stop().slideToggle();
        $(this).toggleClass("click_border");
    });
    /* 태그 클릭 효과*/
    $(".tag li").click(function () {
        $(this).toggleClass("click_tag")
    });
    /* 북마크 클릭효과 */
    $(".bookmark").click(function () {
        $(this).toggleClass("bookmark_click")
    });
    /* .search_side */
    var jbOffset = $('#search_side').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 900) {//여기 지정된 길이 이후부터 적용됩니다
            $('#search_side').addClass("show");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('#search_side').removeClass("show");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });
});/* 끝 */