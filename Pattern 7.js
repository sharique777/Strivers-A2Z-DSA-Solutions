n=4
str=""
for (let i = 0 ; i < n; i++){
  for (let j = 0 ; j < n; j++){
    if ( n-j<=i+1){
str+="*"
} else {
  str+=" "
} 
}
console.log(str); 
str=""
}