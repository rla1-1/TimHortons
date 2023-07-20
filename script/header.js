(function () {
    const headerMoreBtn = document.querySelector(".header__left__more");
    const headerMoreMenu = document.querySelector(".moreMenu");
    const headerCartBtn = document.querySelector(".header__right__cart");

    clickEvent();

    //클릭이벤트리스너 모아놓은 함수 
    function clickEvent() {
        //more 버튼 클릭하면 리스트박스가 열림
        headerMoreBtn.addEventListener('click', function () {
            headerMoreMenu.classList.toggle("active");
        });

        //장바구니 버튼을 클릭하면 장바구니박스가 열림
        headerCartBtn.addEventListener('click', function () {
            document.querySelector(".cartInfo").classList.toggle("active");
        });
    }

    //바깥부분을 클릭했을때 MoreBtn, CartBtn 닫히게 온클릭 사용
    document.onclick = function (e) {
        let elem = e.target;
        while (!elem.classList.contains('moreMenu') && !elem.classList.contains('header__left__more') && !elem.classList.contains('header__right__cart') && !elem.classList.contains('cartInfo')) {
            elem = elem.parentNode;
            if (elem.nodeName == 'BODY') {
                headerMoreMenu.classList.remove("active");
                document.querySelector(".cartInfo").classList.remove("active");
                elem = null;
                return;
            }
        }
    }
}

)();