let score = document.getElementById("score-number1")
let count = 0


function increment1(){
     count += 1
     score.textContent= count
    console.log(count)
}

function increment2(){
    count += 2
    score.textContent = count
    console.log(count)
}

function increment3(){
    count += 3
    score.textContent = count
    console.log(count)
}


let result = document.getElementById("score-number2")
let outcome= 0


function increase1(){
    outcome +=1
    result.textContent=outcome
    console.log(outcome)
}

function increase2(){
    outcome +=2
    result.textContent=outcome
    console.log(outcome)
}

function increase3(){
    outcome +=3
    result.textContent=outcome
    console.log(outcome)
}
