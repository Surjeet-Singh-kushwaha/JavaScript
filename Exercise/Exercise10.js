// Business Name generator

let Adjective ={
    "0":"Crazy",
    "1":"Amazing",
    "2":"Fire"
}

let ShopName={
    "0":"Engine",
    "1":"Foods",
    "2":"Garments"
}
let AnotherWord={
    "0":"Bros",
    "1":"Limited",
    "2":"Hub"
}
let adj =Math.floor((Math.random())*3)
let SN= Math.floor(Math.random()*3)
let Ow = Math.floor(Math.random()*3)
console.log(adj)

console.log(`Business Name:\n ${Adjective[adj]} ${ShopName[SN]} ${AnotherWord[Ow]}` )