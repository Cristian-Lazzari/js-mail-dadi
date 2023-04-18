//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
const btn = document.querySelector("button");
const corpo = document.querySelector("body")
btn.addEventListener('click',
function(){
    let user = Math.floor((Math.random() * 10) + 1);
    console.log("puntgeggio user: " + user);
    let computer = Math.floor((Math.random() * 10) + 1);
    console.log("puntgeggio computer: " + computer);
    if (user>computer){
        alert("hai vinto")
        corpo.classList.add('green')

    }else{
        alert("hai perso")
    }
})