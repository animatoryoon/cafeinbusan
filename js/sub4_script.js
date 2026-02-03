$(document).ready(function () {
    /* 에오스 리셋 */
    $(window).on('load', function () {
        AOS.refresh();
    });
    //처음들어갔을때 모습 만들기...
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active"); // .tabs의 모든 li에서 active라는 클래스를 없앤다
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임(클릭한 li에만 붙음. 내가 클릭한 부분에 들어갈 스타일을 따로 붙여준다)

        $(".tab_content").hide(); //일단 모든 contents들 숨김(내가 클릭한것만 보이게 하기 전에 다 숨기는 과정)


        var activeTab = $(this).find("span").attr("data"); // 내가 방금 클릭한 li 안에 있는 span태그의 data부분 안에 들어있는 id의 이름을 가져와서 activeTab이라는 변수공간안에 넣는다.
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //위에서 가져온 아이디 이름에 해당하는 대상만 보이게 한다.
        //fadeIn 대신에 show를 쓰면 번쩍번쩍한 느낌을 없앨 수 있다.
        return false;
    });

    $(".tabs li:first span").addClass("on");
    $(".tabs li span").click(function () {
        $(".tabs li span").removeClass("on");
        $(this).addClass("on");
    });

});
