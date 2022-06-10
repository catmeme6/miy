alert("Привет");
function gameGuess() {
    var guessNum = 5;
    var ourNum = promt("Введите число");
    if (ourNum > guessNum) {
        alert("Число должно быть меньше!")
        return gameGuess();
    }

    else if(ourNum < guessNum) {
        alert("Число ложно быть больше!");
        return gameGuess();
    }

    else {
        return alert("Вы угадали!");
    }
}

//gameGuess();



function reminder() {
    alert("Слишком долго");
    window.close();
}

setTimeout(reminder, 5000);

function valide(){
    
}

ducument.querySelector(".button").addEventListener("click", valide);