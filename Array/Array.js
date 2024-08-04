//Array Are Mutable
let Arr = [1,2,30,4,50,6]
console.log(typeof Arr)// object
//Methods of Array
//1. typeOf(Arr)
//2. Arr.legth
//3. Arr.toString()
//4. Arr.join(" and ")
// 5. Arr.push(ele)// for inserting elemnt
//6. Arr.pop()// remove the last element
// 7. Arr.shift() // remove first element
//8.unShift(ele)// Add the element at the starting
// 9.delete Arr[7]// After deleting memory is still allocated my the Array size of the Array not change
//10. Arr.splice(1,5) it delete the number from 1 to 5 
// 13. Arr.splice(index , index, val , val)// for adding element at specified position
//11.Arr.sort()
// 12. Arr.slice(index, index)// it returns new array 
// console.log(Arr.length)
// console.log(Arr[0])
Arr[0]="Surjeet"
// Accessing Array Element using for loops
// first 
// for(i=0;i<Arr.length;i++){
// console.log(Arr[i])
// }
//Second

// for(i of Arr){
//     console.log(i)
// }

// Third

// Arr.forEach(Element =>{
//     console.log(Element)
// })
//Fourth Loop
// for(i in Arr){
//     console.log(Arr[i])
// }
console.log()

// let newArr = Arr.map(Element =>{
//     console.log(Element)
// })
// let newArr = Arr.map((Element, index)=>{
//     console.log(index ,Element)
// })
// let newArr = Arr.map((Element, index, Arr)=>{
//     console.log(index ,Element, Arr)
// })



// Filter Method
// const greaterThan = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// } 
// console.log(Arr.filter(greaterThan))


Arr2 =[1,2,3,4,5,6]
// Arr.reduce(function)
// this Return the multiplication of all numbers
// important when you want to add or multiply of all element in Arr
const fact = function(a,b){
    return a*b
    //return a+b
}
// console.log(Arr2.reduce(fact))

//converting Object into Array 
// From Method

console.log(Array.from("Surjeet SIngh"))