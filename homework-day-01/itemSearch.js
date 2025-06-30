// 1. Built-in Method
function searchWithBuiltInMethod(arr, item) {
    if (!Array.isArray(arr)) throw new TypeError('First argument must be an array');
    return arr.includes(item);
}

// 2. Custom Method Search
function searchWithCustomMethod(arr, item) {
    if (typeof arr !== 'object' || arr === null || !('length' in arr)) {
        throw new TypeError('First argument must be an array');
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return true;
    }
    return false;
}


// // Performance Measurement
// function measurePerformance(arr, item, repetitions = 10000) {
//     console.time('Built-in Method');
//     for (let i = 0; i < repetitions; i++) {
//         searchWithBuiltInMethod(arr, item);
//     }
//     console.timeEnd('Built-in Method');


//     console.time('Custom Method');
//     for (let i = 0; i < repetitions; i++) {
//         searchWithCustomMethod(arr, item);
//     }
//     console.timeEnd('Custom Method');
// }


// Test Arrays
const numberArray = [1, 3, 5, 7, 9, 11, 13, 15];
const stringArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const mixedArray = [1, 'apple', true, null, undefined, { fruit: 'banana' }];

// Test Items
const existingNumber = 7;
const nonExistingNumber = 8;
const existingString = 'banana';
const nonExistingString = 'grape';

console.log('--- Number Search Performance ---');
measurePerformance(numberArray, existingNumber);
measurePerformance(numberArray, nonExistingNumber);

console.log('\n--- String Search Performance ---');
measurePerformance(stringArray, existingString);
measurePerformance(stringArray, nonExistingString);


console.log('\n=== Comprehensive Edge Case Tests ===');

console.log('Existing number:', searchWithCustomMethod(numberArray, existingNumber));
console.log('Existing string:', searchWithCustomMethod(stringArray, existingString));

console.log('Non-existing number:', searchWithCustomMethod(numberArray, nonExistingNumber));
console.log('Non-existing string:', searchWithCustomMethod(stringArray, nonExistingString));

console.log('Existing in mixed array (string):', searchWithCustomMethod(mixedArray, 'apple'));
console.log('Non-existing in mixed array:', searchWithCustomMethod(mixedArray, 'grape'));

console.log('Empty array:', searchWithCustomMethod([], 'test'));

console.log('Strict equality (number vs string):', searchWithCustomMethod([1, 2, 3], '1'));

try {
    searchWithCustomMethod('not an array', 'test');
} catch (e) {
    console.log('Non-array input:', e.message);
}