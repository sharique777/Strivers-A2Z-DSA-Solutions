let arr = [1, 3, 4, 1];
let output_arr = [];
let frequ = [];
for (const value of arr) {
    frequ[value] = (frequ[value] || 0) + 1;
}
for (const [index, value] of arr.entries()) {
    output_arr.push([value, frequ[value]]);
}
console.log(output_arr);
