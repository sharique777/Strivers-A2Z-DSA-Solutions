let n = 5;
let str = "";
const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        str += alphabets[i - 1];
    }
    console.log(str);
    str = "";
}
