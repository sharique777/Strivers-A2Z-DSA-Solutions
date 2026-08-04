let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
    }
    console.log(str);
    str = "";
}
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
    }
    console.log(str);
    str = "";
}
