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

const boxes = ['0','1','2','3','4','5','6','7']

function logfirstTwoBoxes(boxes){
    console.log(boxes[0]); // O(1) 
    console.log(boxes[1]); // O(1) 
}
logfirstTwoBoxes(boxes); // O(2)

