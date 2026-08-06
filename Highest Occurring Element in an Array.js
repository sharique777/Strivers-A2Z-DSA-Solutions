let arr=[2,4,8,53,6,6]
function findHighestOccurringElementInAnArray(arr){
let frequ={}
let highestFrequ=-Infinity
let elementWithHighestFrequ=0
for (const iterator_value of arr ) {
frequ[iterator_value]=(frequ[iterator_value] || 0)+1
  if ( frequ[iterator_value]>highestFrequ ) {
    highestFrequ=frequ[iterator_value]
    elementWithHighestFrequ= iterator_value
} 
} 
return elementWithHighestFrequ
}
console.log(findHighestOccurringElementInAnArray(arr));  