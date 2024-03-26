// 7. Anagram Checker: Implement a function to check if two strings are anagrams of each other (contain the same characters in a different order).
function anagramChecker(firstStr, sendStr) {
    let firstStrArr = firstStr.split('').sort();
    let sendStrArr = sendStr.split('').sort();
    if (firstStrArr.join('') === sendStrArr.join('')) {
        console.log("anagram string");
    }
    else {
        console.log("It is not anagram strring");
    }
}
anagramChecker("abc", "cba");
export {};
