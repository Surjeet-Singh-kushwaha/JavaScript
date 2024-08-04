// let getPromis =()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('Hello I am a promise');
//         // resolve("Success")
//         reject("Error")
//     })
// }
// 
// let promis = getPromis();
// promis.then((result)=>{
//  console.log("Promise resuloved ",result)
// })
// promis.catch((error)=>{
//     console.log("Some error occured",error)
// })
// ****************************************************************************************
// function getData(dataID, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data ID:", dataID)
//             if (getNextData) {
//                 getNextData()
//                 
//             }
//             resolve("Success")
//         }, 5000)
//     })
// 
// }
// **********************************************************************************************
let promis = new Promise((resolve,reject)=>{
   console.log("Hii i am a promise")
//    resolve("Success")
   reject("Error")
})
console.log(promis)

// **********************************************************************************

// function asyncfun1(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//           console.log("Some data1...")
//           resolve("Success")
//         },5000)
// 
//     })
// }
// function asyncfun2(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//           console.log("Some data2....")
//           resolve("Success")
//         },5000)
// 
//     })
// }
// 
// console.log("Fetching data1......")
// let data1 = asyncfun1();
// data1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data2......")
// let data2 = asyncfun2();
// data2.then((res)=>{
//     console.log(res);
// })
// data2.catch((err)=>{
//     console.log(err)
// })
// })
// data1.catch((err)=>{
//     console.log(err)
// })

// *****************************************************************************
// function getData(dataID {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data ID:", dataID)
//            
//             resolve("Success")
//         }, 5000)
//     })
// 
// }