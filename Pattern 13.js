let n = 5;
let sum = 0;
let str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        sum++;
        str += sum + " ";
    }
    console.log(str);
    str = "";
}
