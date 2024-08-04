//1.Simple For loop
// for( i =0;i<5;i++){
// // console.log(i)
// process.stdout.write(" "+String(i));// it prints in the same line take string arg only
// }
// pattern program
function RotedHalfTriangle(Line){
    for(i=0;i<Line;i++){
        for(j=i;j<Line;j++){
           process.stdout.write(" "+String(j))
        }
        console.log()
    }
    
}
function ZeroOneTriangle(Line){
   
    for(i=1;i<=Line;i++){
        Row=''
        for(j=1;j<=i;j++){
          if((i+j)%2==0){
            Row+='0 '
          }
          else{
            Row+='1 '
          }
        }
        console.log(Row)
    }
}

// ZeroOneTriangle(6)
//2.While loop
Arr =[1,21,32,43,8,50,7]
 function printArr(Arr){
    i=0
while(i<Arr.length){
    process.stdout.write(String(Arr[i]+" "))
    i++
}
 }
//  printArr(Arr)
// 3.Do while loop Example
function tableOf(num){
    i=1
    do{
      console.log(i+" x "+num+" = "+i*num)
      i++
    }while(i<=10)
}
// tableOf(7)

// 4 for of loop
function useofFor_of_loop(Arr){
    for(const num of Arr){
        process.stdout.write(String(num+" "))
    }
}
// useofFor_of_loop(Arr)

// PRint the character of a string 

let str ="Surjeet Singh"
 function printChar(str){
    for(i of str){
        console.log(i)

    }
 }
//  printChar(str)

//4.for of for MAP

const map = new Map();
map.set("In","India")
map.set("USA", " United State of America")
map.set('Fr', "France")
map.set('In', "India")

function for_Of_Map(map){
    for([key,value] of map){
        console.log(key,": ",value)
    }
}
// ,for_Of_Map(map)
 const persosn={
    id:23242,
    name:"Surjeet Singh",
    Gender:"Male",
    Age: 20,
 }

//  function for_of_for_Object(persosn){
//     for([key,value] of persosn){       object is not iterable
//         console.log(key," : ",value)
//     }
//  }
//  for_of_for_Object(persosn)

// 5. For in loop

function for_In_Arr(Arr){
    for(index in Arr){// it gives the index value of Array
        process.stdout.write(String(Arr[index])+" ")
    }
}
// for_In_Arr(Arr)
// For in for object
 function for_In_for_Object(persosn){
    for(key in persosn){       //object is not iterable
        console.log(key+" : "+persosn[key])
    }
 }
//  for_In_for_Object(persosn)
function for_In_Map(map){
    for([key,value] of map){
        console.log(key,": ",value)
    }
}
// for_In_Map(map)

 //6. ForEach loop
 // first Notation
// Arr.forEach(element => {
//     console.log(element)
// });


//Second NOtation
// Arr.forEach(function(value){
//     console.log(value)
// })

//Third Notation
// function fun(val){
//     process.stdout.write(String(val)+" ")
// }
//  Arr.forEach(fun)


// fourth Notation
//  Arr.forEach( (ele) =>{
//     console.log(ele)
//  })

//Fifth Notation
//  Arr =[1,21,32,43,8,50,7]
// 
//  Arr.forEach((item , index ,val)=>{
//          console.log(item," ",index," ",val)
//  })

 // ForEach Loop for Object

// persosn.forEach((key)=>{
//     console.log(key," : ")
//  })
 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
// 
// myCoding.forEach((item) =>{
//     console.log(item.languageName)
//     console.log(item.languageFileName)
// })

 const Value =Arr.forEach((val) =>{
    console.log(val)
    return val

})
console.log(Value)