//Took 31 mins

 n=2
c=0
str=""
for (let i = 0 ; i < n; i++){
  for (let j = 0 ; j < n; j++){
    if ( n-j<=i+1){
str+="*"
c++
if (c  === i+1){

      for (let k = 0 ; k < i-1+1; k++){
str+="*"
//console.log(k); 
} 
} 
} else {
  str+=" "
} 
}
console.log(str); 
str=""
c=0
}