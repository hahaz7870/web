const container_slides = document.querySelector(".slide_container");
const slide = document.querySelector(".slide");


const prev = document.getElementById("prev");
const next = document.getElementById("next");



prev.addEventListener("click", () => {
    const slide_width = slide.clientWidth;
    container_slides.scrollLeft -= slide_width;
})

next.addEventListener("click", () => {
    const slide_width = slide.clientWidth;
    container_slides.scrollLeft += slide_width;
})
