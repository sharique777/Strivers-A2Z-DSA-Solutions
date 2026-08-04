let n=5
 function displayNumbers(i,n){
   console.log(i); 
   if ( n> i) {
    
   displayNumbers(i+1,n)
} 
 }
 displayNumbers(1,n)