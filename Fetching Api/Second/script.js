const url ="https://api.thecatapi.com/v1/images/search"
let box = document.querySelector(".box")
let btn = document.querySelector(".btn")

let getImage = async()=>{
    let response = await fetch(url);
    console.log(response)
  
    let data = await response.json();
    console.log(data[0].url)

let img = document.createElement("img")
img.src = data[0].url;
box.appendChild(img)
}

btn.addEventListener('click',getImage)