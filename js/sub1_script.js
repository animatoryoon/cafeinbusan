$(document).ready(function () {
    var jbOffset = $('.highlight').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 300) {//여기 지정된 길이 이후부터 적용됩니다
            $('.no1').addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('.no1').removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 850) {//여기 지정된 길이 이후부터 적용됩니다
            $('.no2').addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('.no2').removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1400) {//여기 지정된 길이 이후부터 적용됩니다
            $('.no3').addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('.no3').removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });
});/* 끝 */

