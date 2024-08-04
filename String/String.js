//Strings are immutable
let First_name = "MOhan"
let second_name ="Chaurasiya"
full_Name = First_name+second_name
for(ch in full_Name){
    // process.stdout.write(full_Name.charAt(ch)+" ")
}
// console.log("Short form of name: ",First_name[0]+second_name[0])// for Accessing Chracter
// console.log("Full Name:",First_name, second_name)
// console.log(full_Name)
// 
// for(ch of full_Name){
//     process.stdout.write(ch+" ")
// }

equation = " 3+3+9"
// console.log(eval(equation)) // 15

let eq1=new String(" 3+3+9")
console.log(eval(eq1))// [String: ' 3+3+9']
console.log(eval(eq1.valueOf()))//15
str1 = "   RAhul Priya"
str2= " Amit"
str3 =''
console.log(str1.toUpperCase())

console.log(str1.toLowerCase())

console.log(str1.length)

console.log(str3.concat(str1,str2))

console.log(str3.trim())

console.log(str1.indexOf("P"))

console.log(str3.slice(2,5))