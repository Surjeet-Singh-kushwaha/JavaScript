const url = "https://cat-fact.herokuapp.com/facts"
let btn = document.querySelector(".btn")
let box = document.querySelector(".box")
//************************************************************************ */
// First method 
// const getfacts = async()=>{
//     console.log("Getting data")
//     let response = await fetch(url);
//     console.log(response.status);
//  let data = await response.json();
//  console.log(data[0].text)
// let number = Math.floor(Math.random(4)*4)
// console.log(number)
//  box.innerText = data[number-1].text;
// }

// btn.addEventListener('click',getfacts)
// Second method for doing same

function getFacts() {
    fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data[0].text)
            box.innerText = data[0].text
        })
}
btn.addEventListener('click',getFacts)