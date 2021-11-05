let name;
let countUser = 0;
let countComp = 0;
let countGame = 0;
function isEmpty(str) {
    if ((str == undefined?'':str.trim() == '') || str === null) {
        return true;
    }
    return false;
}
function enterName() {
    do {
        name = prompt("Enter your name:");
        console.log(name);
    } while (isEmpty(name));
    document.getElementById("pp").textContent = "Random number of player "+name+":";
}
function randNum() {
    if (countGame == 0) document.getElementById("pp4").textContent = "Try Again";
    if (countGame > 3) endGame();
    let valueUser = Math.floor(Math.random() * 101);
    let valueComp = Math.floor(Math.random() * 101);
    valueUser > valueComp ? countUser++ : countComp++;
    document.getElementById('valueUser').value = valueUser;
    document.getElementById('valueComp').value = valueComp;
    document.getElementById("pp2").textContent = "Score " + countComp + ":" + countUser;
    document.getElementById("pp3").textContent = "Number of attempts: " + ++countGame+"/3";
    if (countGame == 3) endGame();
}
function endGame(){
    countGame = 0;
    countUser = 0;
    countComp = 0;
    document.getElementById("pp4").textContent = "New Game";
}
window.onload = enterName();