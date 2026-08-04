
let n=5
function Sum_of_First_N_Numbers(i,n,sum){
  if (n >= i) {
    return Sum_of_First_N_Numbers(i+1,n,sum+i)
} 
else {
  return sum
  
}
}
console.log(
Sum_of_First_N_Numbers(1,n,0)
  ); 