 function reverse_an_array(arr,i){
   if ( i=== -1){
return []
} 
   return [arr[i]].concat(reverse_an_array(arr,i-1))
 }
 console.log(
 reverse_an_array([1,2,3],2)
   ); 