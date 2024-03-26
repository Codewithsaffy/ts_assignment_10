// 1. Palindrome Checker: Create a function that checks whether a given string is a palindrome (reads the same backward as forward).
function Palindrome(val) {
    val = val.toLowerCase();
    let halfLen = Math.floor(val.length / 2);
    let firdtHal = val.split('').splice(0, halfLen).join('');
    let secondHal = val.split('').reverse().splice(0, halfLen).join('');
    if (firdtHal === secondHal) {
        console.log("palindrome string");
    }
    else {
        console.log("It is not palindrome strring");
    }
}
Palindrome("Malayalam");
export {};
