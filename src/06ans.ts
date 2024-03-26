// 6. Fibonacci Sequence: Create a function to generate the Fibonacci sequence up to a specified number of terms.
function fibonacciSequence(noOfTerms: number) {
    let a = 0;
    let b = 1;
    let temp;
    const fibonacciArr: number[] = [];
    while (noOfTerms-- > 0) {
        fibonacciArr.push(a);
        temp = a;
        a = b;
        b += temp;
    }
    console.log(fibonacciArr);
}

fibonacciSequence(10);

