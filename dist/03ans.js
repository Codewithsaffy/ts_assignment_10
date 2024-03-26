// 3. Factorial Calculator: Implement a function to calculate the factorial of a non-negative integer.
function factorial(no) {
    no = Math.abs(no);
    let noArr = [];
    for (let i = 0; i < no; i++) {
        noArr.push(i + 1);
    }
    let fac = noArr.reverse();
    let red = fac.reduce((a, b) => {
        return a * b;
    });
    console.log(red);
}
factorial(4);
export {};
