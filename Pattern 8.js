let n = 5;
let str = "";
let append = false;

for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
        if (n - j <= i + 1 || append) {
            str += "*";

            if (!append) {
                n += i - 1 + 1;
            }

            append = true;
        } else {
            str += " ";
        }
    }

    n -= i - 1 + 1;
    console.log(str);

    str = "";
    append = false;
}
