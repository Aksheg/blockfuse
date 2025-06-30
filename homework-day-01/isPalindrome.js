// Using While Loop for Palindrome Check

function isPalindrome(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (cleanedStr.length <= 1) {
        return true;
    }

    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("😊🐶😊"));
console.log(isPalindrome("nurses run"));
console.log(isPalindrome(123));