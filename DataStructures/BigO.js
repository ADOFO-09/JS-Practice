const nemo = ['nemo'];

const everyone = ['Akwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame','nemo'];
const large = new Array(100).fill('nemo');

// function findNemo(array){
//     // let t0 = performance.now();
//     for(let i=0; i<array.length; i++){
//         if(array[i] === 'nemo'){
//             console.log('Found Nemo');
//         }
//     }
    // let t1 = performance.now();
    // console.log("Call for findNemo is " + (t1-t0) + " milliseconds");
// }

// findNemo(everyone);  // O(n) --> Linear Time

// Differet ways of writng loops
// for each loop
const findNemo2 = (array) => {
    array.forEach(fish => {
        if(fish === 'nemo')
        console.log("Found Nemo")
    })
}
findNemo2(nemo);
// for of loop
const findNemo3 = array => {
    for (let fish of array){
        if(fish === 'nemo')
            console.log("Good one")
    }
}
findNemo3(everyone)

// const boxes = ['0','1','2','3','4','5','6','7']

// function logfirstTwoBoxes(boxes){
//     console.log(boxes[0]); // O(1) 
//     console.log(boxes[1]); // O(1) 
// }
// logfirstTwoBoxes(boxes); // O(2)

// O(n^2)
// const array = ['a','b','c','d','e','f']

// function logAllPairs(){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             console.log(array[i] + " " + array[j])
//         }
//     }
// }

// logAllPairs(array); // O(n^2) 

// function printAllNumbersThenAllPairsSum(numbers){

//     console.log("These are the numbers")
//     numbers.forEach(function(number){
//         console.log(number);
//     })

//     console.log("These are their sum")
//     numbers.forEach(function(firstNumber){
//         numbers.forEach(function(secondNumber){
//             console.log(firstNumber + secondNumber)
//         });
//     });
// }

// printAllNumbersThenAllPairsSum([1,2,3,4,5]);

// Space complexity
function booooo(n){
    for(let i = 0; i < n.length ; i++){
        console.log("booool!")
    }
}

// booooo([1,2,3,4,5]); // space complexity of O(1)

function arrayOfHiNTimes(n){
    let hiArray = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    return hiArray
}

console.log(arrayOfHiNTimes(6));   // space complexity of O(n)




