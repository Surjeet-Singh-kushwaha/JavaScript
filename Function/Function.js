var num = document.getElementById("num").value
function fun1(num1,num2){
    let sum = num1+num2
    document.write(`${num1} + ${num2} = ${sum}`)
 }

 function fun2(num){

    var fact =1
    for(i=1;i<=num;i++){
        console.log(i)
        fact=fact*i
    }
    document.write(fact)
 }