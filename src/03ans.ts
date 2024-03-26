// 3. Factorial Calculator: Implement a function to calculate the factorial of a non-negative integer.

function factorial(no: number) {
    no = Math.abs(no)
    let noArr: number[] = []
    for (let i: number = 0; i < no; i++) {
        noArr.push(i + 1)
    }
    let fac = noArr.reverse()
    let red = fac.reduce((a: number, b: number): number => {
        return a * b
    })
    console.log(red)
}
factorial(4)