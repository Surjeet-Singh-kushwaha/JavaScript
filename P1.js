function sum(){
    let a =document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    if(a>b){
     document.getElementById("show").innerHTML=`${a} is greater than ${b}`
    }
    else{
        document.getElementById("show").innerHTML=`${b} is greater than ${a}`
 }