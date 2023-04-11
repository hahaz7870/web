const tabsBtns = document.querySelectorAll(".tab-btn")
const arcticles = document.querySelectorAll(".content")

tabsBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        let currentTab = btn;
        let id = currentTab.dataset.id;

    // Убираем active у табов
        tabsBtns.forEach((btn) => {
            btn.classList.remove("active");
        })
        // добавляем нужному табу active
        currentTab.classList.add("active")
        
        
        arcticles.forEach((arcticles) => {
            arcticles.classList.remove("active");
        })

        let element = document.getElementById(id);
        element.classList.add("active")
    })
})
