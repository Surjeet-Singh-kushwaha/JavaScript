let random = Math.random()

let a = prompt("Enter first number")
let c = prompt("Enter Operation")
let b = prompt("Enter Second number")


let operation ={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"
}

if(random>0.1){
    c = operation[c]
alert(`the resule is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    alert(`the resule is ${eval(`${a} ${c} ${b}`)}`)
}

    
