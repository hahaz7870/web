// const slide = document.querySelectorAll(".gallery_slide")

// slide.forEach((aSlide) => {
//     aSlide.addEventListener("click", function () {
//         let currentTab = aSlide;

//         slide.forEach((aSlide) => {
//             aSlide.classList.remove("active");

//             currentTab.classList.add("active")
//         })
// })
// })



allSlides = document.querySelectorAll(".gallery_slide");

allSlides.forEach((slide) => {
    slide.addEventListener("click", () => {
        clearAll()
        slide.classList.add("active")
    })


})

function clearAll(){
    allSlides.forEach((slide) => {
        slide.classList.remove("active")
    })
}

