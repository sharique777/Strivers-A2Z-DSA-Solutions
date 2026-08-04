let number = 5;
function factorial_of_a_given_number(number) {
    if (number <= 1) {
        return number;
    }
    return number * factorial_of_a_given_number(number - 1);
}
console.log(factorial_of_a_given_number(number));
