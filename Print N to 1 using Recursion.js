let n=5
function displayNumbers(i,n){
  if (i > 0) {
    console.log(i); 
    displayNumbers(i-1,n)
} 
}
displayNumbers(5,5)