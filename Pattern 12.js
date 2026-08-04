let n = 2;
let str = "";
let spaces = "";
for (let i = 0; i < n; i++) {
    for (let j = 1; j < i + 2; j++) {
        str += j;
    }
    for (let j = 2; j < 2 * n - 2 * i; j++) {
        spaces += " ";
    }

    str += spaces;
    for (let j = i + 1; j >= 1; j--) {
        str += j;
    }
    console.log(str);
    str = "";
    spaces = "";
}
