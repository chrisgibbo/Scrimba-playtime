let homeScore = 0
let guestScore = 0
document.getElementById("homeScore").textContent = homeScore;
document.getElementById("guestScore").textContent = guestScore;

const homeScore1 = document.getElementById("homeScore")
const guestScore1 = document.getElementById("guestScore")

function homePlus1 (){
    let result = homeScore +=1
    homeScore1.textContent = result
}

function homePlus2 (){
    let result = homeScore +=2
    homeScore1.textContent = result
}

function homePlus3 (){
    let result = homeScore +=3
    homeScore1.textContent = result
}

function guestPlus1 (){
    let result = guestScore +=1
    guestScore1.textContent = result
}

function guestPlus2 (){
    let result = guestScore +=2
    guestScore1.textContent = result
}

function guestPlus3 (){
    let result = guestScore +=3
    guestScore1.textContent = result
}

function resetAll(){
    // homeScore = 0;
    // guestScore = 0;
    window.location.reload()

}


