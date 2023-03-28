const lBtn = document.querySelectorAll(".letter"); // сохраняем все кнопки
const number = lBtn.length;

for (let i = 0; i < number; i++){
    lBtn[i].addEventListener("click", function(event){
        const bIH = lBtn[i].innerHTML; // получаем нажатую букву
        makeSound(bIH); // Г
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key)
})

const makeSound = (key) => {
    switch (key){
        case "A":
            const letA = new Audio("sounds/A.mp3");
            letA.play();
            break;
        case "B":
            const letB = new Audio("sounds/brue.mp3")
            letB.play();
            break;
        case "C":
            const letC = new Audio("sounds/povezlo.mp3")
            letC.play();
            break;
        case "D":
            const letD = new Audio("sounds/cat.mp3")
            letD.play();
            break;
    }
}

