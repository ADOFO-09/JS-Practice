// const nemo = ['nemo'];

// const everyone = ['Akwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
// const large = new Array(100).fill('nemo');

// function findNemo(array){
//     // let t0 = performance.now();
//     for(let i=0; i<array.length; i++){
//         if(array[i] === 'nemo'){
//             console.log('Found Nemo');
//         }
//     }
//     // let t1 = performance.now();
//     // console.log("Call for findNemo is " + (t1-t0) + " milliseconds");
// }

// findNemo(large);  // O(n) --> Linear Time

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

function printAllNumbersThenAllPairsSum(numbers){

    console.log("These are the numbers")
    numbers.forEach(function(number){
        console.log(number);
    })

    console.log("These are their sum")
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber)
        });
    });
}

printAllNumbersThenAllPairsSum([1,2,3,4,5]);

