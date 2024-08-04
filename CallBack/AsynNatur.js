// console.log("Hii")
// console.log("my name is surjeet Singh")
// 
// setTimeout(()=>{
//     console.log('Hello i love my name')
// },2000)
// 
// console.log("Hii aniket")
// console.log("my name is surjeet Singh")

function print(name){
console.log(name);
}
setTimeout(() => {
    print("MY name is....")
    setTimeout(()=>{
console.log("Surjeet singh")
    }, 2000 )
}
, 2000);
