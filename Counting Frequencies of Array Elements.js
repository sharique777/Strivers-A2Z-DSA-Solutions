let arr = [1, 3, 4, 1];
let output_arr = [];
let frequ = [];
for (const value of arr) {
    frequ[value] = (frequ[value] || 0) + 1;
}
for (const index in frequ ) {

if ( frequ[index]== undefined){
continue
} 
    output_arr.push([Number(index), frequ[index]]);
}
console.log(output_arr);
