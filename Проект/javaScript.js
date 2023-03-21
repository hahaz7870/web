
let userNum;
let max_life = 20
let life = 20;
let computer = Math.trunc(Math.random() * 100) + 1;

let help = document.querySelector(".result__help__out")
let q = document.querySelector(".sign")
let bt = document.querySelector(".field-button")
let inp_el = document.querySelector(".inp")
let score_el = document.querySelector(".result__score__out")
let record_el = document.querySelector(".result__record__out")
score_el.innerHTML = life;

// increase - увеличивать -> инкримент
// decrease - уменьшать -> декримент

function game_over(){
    if (life <= 0){
        score_el.innerHTML = "Game Over";
        score_el.style.color = "red"

    }
}

function check_value(){
    let user = inp_el.value;

    if(user == computer){
        q.innerHTML = user;
        inp_el.value = "Угадал";
        if (record_el.innerHTML == "-"){
            record_el.innerHTML = max_life - life
        }
        else{
            if (record_el.innerHTML < max_life - life){
                record_el.innerHTML = max_life - life + 1
            }
        }
    }
    if(user > computer){
        help.textContent = "Меньше";
    }

    else if(user < computer){
        life--;
        score_el.innerHTML = life;
        game_over()
        help.textContent = "Больше";


    }
    else{
        life--;
        score_el.innerHTML = life;
        game_over()
        help.textContent = "Угадал";

    }
}












