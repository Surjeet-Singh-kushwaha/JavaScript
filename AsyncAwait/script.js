// Async function always return a promise by default
// let fun =async()=>{
//     console.log("I am a Async Function")
// }

// function api(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Weather data")
//         resolve(200)
//     },2000)
//    
//    })
// }
// 
// async function getweatherdata(){
// //    console.log("Fetching first data........")
//     await api();
//     // console.log("Fetching Second data........")
//     await api()
//     // console.log("Fetching third data........")
//     await api()
// }

function getData(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data Id: ",data)
            resolve("success")
        },2000)
    })
   
}

(async function getdataId(){
    console.log("Getting data1................")
    await getData(1);
    console.log("Getting data2................")
    await getData(1);
    console.log("Getting data3................")
    await getData(1);
    console.log("Getting data4................")
    await getData(1);
    console.log("Getting data5................")
    await getData(1);

}
)()