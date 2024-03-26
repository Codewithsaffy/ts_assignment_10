// 5. Prime Number Checker: Develop a function to determine whether a given positive integer is a prime number.
function primeNo(no) {
    let count = 0;
    for (let i = 2; i <= no; i++) {
        if (no % i == 0) {
            count++;
        }
    }
    if (count == 1) {
        console.log("Prime Number");
    }
    else {
        console.log("Not Prime Number");
    }
}
primeNo(19);
export {};
