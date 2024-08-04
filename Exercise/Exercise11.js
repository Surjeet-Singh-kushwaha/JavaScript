let num =4
let fact =1;
Arr=[]
 for(i=1;i<=num;i++){
  fact=fact*i;
  Arr[i-1]=i;
 }

 console.log(fact)
factorial = (a,b)=>{
    return a*b
}
 console.log(Arr.reduce(factorial))