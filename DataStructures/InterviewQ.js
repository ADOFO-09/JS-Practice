// Given 2 arrays, create a function that lets a user know (true/false)
// whether these two arrays contain any common items.
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array1 = ['z', 'y', 'i'];
// should return false
// .................
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// QUESTION SOLUTION:
// FIRST APPROACH

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// const containsCommonItems = function(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// O(a*b) not O(n^2) because the array sizes are not the same.

// containsCommonItems(array1, array2);

// SECOND APPROACH
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// array1 => obj {
// a: true,
// b: true,
// c: true,
// x: true
// };

// array2[index] === obj.properties

function containsCommonItems2(arr1, arr2){
    // loop through first array and create an object where properties === items in the array
    let map = {};
    for(let i = 0; i < arr1.length; i++){
        if(!map(arr1[i])){
            const item = arr1[i];
            map[item] = true;            
        }
    }
    // loop through second array and check if item in second array exists on created object.
    for(let j = 0; i < arr2.length; j++){
        if(map(arr2[j])){
            return true;
        }
    }
    return false
}

// O(a + b) Time complexity
// O(a) Space complexity

containsCommonItems2(array1, array2);

// THIRD APPROACH
function containsCommonItems3(arr1, arr2){
   return arr1.some(item => arr2.includes(item))
}

containsCommonItems3(array1, array2);
