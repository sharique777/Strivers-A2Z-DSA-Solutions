
let nums = [0, 0, 0, 0, 0, 0, 0, 0]
function getMaximumConsecutiveOnes(nums){
  let maximumConsecutiveOnes=0
  let consecutiveOnes=0
  for (const currentNumber of nums ) {
    if ( currentNumber=== 1){

    consecutiveOnes++
    if ( consecutiveOnes>maximumConsecutiveOnes ) {
    maximumConsecutiveOnes=consecutiveOnes
} 
} else {
    consecutiveOnes=0
}

} 
return maximumConsecutiveOnes
}
console.log(getMaximumConsecutiveOnes(nums)); 