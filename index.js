let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let restartEl = document.getElementById("restart-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}
function restart(){
  
  countEl.textContent = 0
    count = 0
    
}

