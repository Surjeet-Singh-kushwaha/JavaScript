// alert("HIi")

let divbox = document.getElementsByClassName("box");

divbox[1].style.background = "blue";
divbox[2].style.background = "black";
divbox[3].style.background = "yellow";
divbox[4].style.background = "wheat";

divbox[0].textContent = "0";
divbox[1].textContent = "10";
divbox[2].textContent = "+";
divbox[3].textContent = "30";

let num1 = parseInt(divbox[1].textContent);  // Convert to integer for numeric operations
let sym = divbox[2].textContent;
let num2 = parseInt(divbox[3].textContent);  // Convert to integer for numeric operations

divbox[4].textContent = `${eval(`${num1} ${sym} ${num2} +50-20+23`)}`;
console.log(divbox[4].textContent);
let box2 = divbox[2]
let button = document.getElementById("button")
button.addEventListener('click',(e)=>{
    console.log(e)
    box2.classList.toggle("box2")
})