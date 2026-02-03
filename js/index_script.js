$(document).ready(function () {
    var jbOffset = $('#app h1.title::after').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 5800) {//여기 지정된 길이 이후부터 적용됩니다
            $('#app h1').addClass("highlight");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('#app h1').removeClass("highlight");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });

    var swiper = new Swiper(".mb", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,/*4번째 이미지에서 다음 키를 누르면 바로 첫번째 이미지가 나오게 한다*/
    });

    var swiper = new Swiper(".swiper_recommend", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },//화살표를 작동하게 하는 옵션.
        autoplay: {
            delay: 2500,
            /*이미지가 자동으로 넘어가는 시간설정. 1000 = 1초*/
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
    });//지우면 안되요!


    var swiper = new Swiper(".swiper_news", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },//도트부분을 작동하게 하는 옵션.
        autoplay: {
            delay: 5000,
            /*이미지가 자동으로 넘어가는 시간설정. 1000 = 1초*/
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 50,
    });

    var swiper = new Swiper(".swiper_product", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            /*이미지가 자동으로 넘어가는 시간설정. 1000 = 1초*/
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 300,
        },
        // loop: true,
    });
});/* 끝 */