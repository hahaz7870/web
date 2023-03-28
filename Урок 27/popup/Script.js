const modalBtns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

// Закрытие модального окна
const closeModal = () => {
    modal.classList.add("hidden"); // Добавление класса элементу
}

modalBtns.forEach((btn) =>{
    btn.addEventListener("click", function(){
        modal.classList.remove("hidden");
    })
})

close.addEventListener("click", closeModal);