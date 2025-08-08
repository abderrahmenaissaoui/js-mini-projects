let homeCount = document.getElementById("home-counter")
let guestCount = document.getElementById("guest-counter")
let h = 0
let g = 0

function addOneHome(){
    h += 1
    homeCount.textContent = h
}
function addTwoHome(){
    h += 2
    homeCount.textContent = h
}
function addThreeHome(){
    h += 3
    homeCount.textContent = h
}
function addOneGuest(){
    g += 1
    guestCount.textContent = g
}
function addTwoGuest(){
    g += 2
    guestCount.textContent = g
}
function addThreeGuest(){
    g += 3
    guestCount.textContent = g
}

function restart(){
    homeCount.textContent = 0
    guestCount.textContent = 0
}