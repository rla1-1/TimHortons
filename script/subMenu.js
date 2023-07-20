(function () {

    inputClick();
    mapClick();
    tabClick();

    //주소적는 input 박스 클릭 시 포커스 디자인 변경
    function inputClick() {
        const inputFocus = document.getElementById('input_focus');
        const inputContainer = document.querySelector('.store-serch__box');

        inputFocus.addEventListener('focus', function () {
            inputContainer.classList.add("active");
        });

        inputFocus.addEventListener('blur', function () {
            inputContainer.classList.remove("active");
        });
    }

    //map/list 버튼 클릭시 컨텐츠 변경
    function mapClick() {
        const mapBtn = document.querySelector('.menu-header__map');
        const listBtn = document.querySelector('.menu-header__list');
        const storeTab = document.querySelector('.store-tab');
        const storeMap = document.querySelector('.store-map');

        mapBtn.addEventListener('click', () => {
            mapBtn.classList.remove("active");
            listBtn.classList.add("active");

            storeTab.classList.remove("active");
            storeMap.classList.add("active");

        });

        listBtn.addEventListener('click', () => {
            listBtn.classList.remove("active");
            mapBtn.classList.add("active");

            storeMap.classList.remove("active");
            storeTab.classList.add("active");
        });
    }

    //tab 박스 컨텐츠 변경
    function tabClick() {
        const tabs = document.querySelectorAll('.tab-header__title');
        const tabcontents = document.querySelectorAll('.tab-body__content');

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                tabcontents.forEach(content => {
                    content.classList.remove("active");
                });
                tabs.forEach(tab => {
                    tab.classList.remove("active");
                });
                tabcontents[index].classList.add("active");
                tabs[index].classList.add("active");
            });
        });
    };

})();
