// call Back function example one
// function sum(a , b){
//     console.log(a+b);
// }
// 
// function getData(a,b ,callBack){
//     callBack(a,b)
// }
//  getData(4,3,sum)
//second Example of 
function getData(dataId, getNexData){
    setTimeout(()=>{
        console.log("Data ID: ",dataId)
        if(getNexData)
        getNexData();
    },2000)
}


 
getData(1,()=>{
    console.log("getting data2...");
    getData(2,()=>{
        console.log("Getting data 3...");
        getData(3,()=>{
            console.log("Getting data 4...");
            getData(4)
        })
    })
})