// 1.Number data
const StudentID = 12243;
// StudentID = 78 we can not resign it
floatNum = 234.78
console.log(typeof(floatNum))
const PI = 3.147
console.log(typeof PI)
// 2. String+
 let StudrntName = "Surjeet Singh";
Sec = 'D'
Gender="MAle"
console.log(typeof(Sec))

//3.Boolean
isMale = true
isfeMale = false
console.log(typeof(isMale))

//4. BigInt
bignum = 2834n
console.log(typeof(bignum))

//5.Undefined
let val
console.log(typeof(val))
//6. Date
let todayDate = new Date()
console.log(todayDate)
console.log(typeof( todayDate))
//7.Symbol
let key = Symbol("Symbol Key")
console.log(key)
console.log(typeof(key))
//8.List or Array
let Arr=[23,34,56,23,56,34]

console.log(Arr[1])
console.log(typeof Arr)

console.table([StudentID,StudrntName])
// 9.object
let studentData ={
    id:92023,
    name:"Surjeet",
    age:43,
    isStudent:true,
    dob:4 

}
console.log(studentData)
console.log(studentData.id)
//10 Null
let N = null
console.log(typeof N)

//Extra 
let sum = 3+'6'
console.log(sum)
console.log( typeof sum)