let n = 5;
let str = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
    str = "";
}
