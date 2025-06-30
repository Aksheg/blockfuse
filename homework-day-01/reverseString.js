// Using While Loop to Reverse a String

function reverseStringWithLoop(str) {
    if (typeof str !== 'string') throw new TypeError('Input must be a string');
    if (str.length <= 1) return str;

    const arr = Array.from(str);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr.join('');
}


// Test cases covering various edge cases
console.log(reverseStringWithLoop('hello') === 'olleh');           
console.log(reverseStringWithLoop('') === '');                  
console.log(reverseStringWithLoop('a') === 'a');                
console.log(reverseStringWithLoop('ab') === 'ba');              
console.log(reverseStringWithLoop('racecar') === 'racecar');    
console.log(reverseStringWithLoop('12345') === '54321');        
console.log(reverseStringWithLoop('😊🐶') === '🐶😊');            
console.log(reverseStringWithLoop('  hello  ') === '  olleh  ');