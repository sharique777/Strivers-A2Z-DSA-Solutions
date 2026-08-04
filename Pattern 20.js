let n=5
let str=""
for (let i = 1 ; i <=n; i++){
for (let j = 1 ; j <=i; j++){
  str+="*"
} 
for (let j = 1 ; j <=2*(n-i); j++){
  str+=" "
} 
for (let j = 1 ; j <=i; j++){
  str+="*"
} 
console.log(str); 
str=""
}  
for (let i = n-1 ; i >=1; i--){
for (let j = 1 ; j <=i; j++){
  str+="*"
} 
for (let j = 1 ; j <=2*(n-i); j++){
  str+=" "
} 
for (let j = 1 ; j <=i; j++){
  str+="*"
} 
console.log(str); 
str=""
}  