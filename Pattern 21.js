
let n=2
let str=""
for (let i = 1 ; i <= n; i++){
  str+="*"
}
console.log(str); 
str=""
for (let j = 0 ; j < n-2; j++){
for (let i = 1 ; i <= n; i++){
  if (i === 1 || i===n){

str+="*"
} else {
  
str+=" "
}
} 
console.log(str); 
str=""
} 

 

for (let i = 1 ; i <= n; i++){
  str+="*"
} 
console.log(str); 