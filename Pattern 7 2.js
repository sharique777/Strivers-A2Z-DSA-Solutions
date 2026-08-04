let n = 2;
let str = "";
let spaces = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        spaces += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
    }
    console.log(spaces + str);
    str = "";
    spaces = "";
}
