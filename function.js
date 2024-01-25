// Functions
// function logger(){
//     console.log("Hello world!")
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// // Generative functions
// const appleJuice = fruitProcessor(5, 0)
// console.log(fruitProcessor(5, 0))

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// //function Declaration
// function calcAge1(birthYear){
//     return 2037-birthYear;
// }
// const age1 = calcAge1(1991)

// // function Expression
// const calcAge2 = function(birthYear){
//     return 2037-birthYear;
// }
// const age2 = calcAge2(1991)
// console.log(age1, age2)

// // Difference between function declaration and expression
// // In JavaScript, hoisting refers to the availability of the variables and the functions 
// // at the beginning of the code. Function declarations are similar to var; they will be 
// // automatically hoisted, whereas function expressions will not be hoisted.

// // Arrow Functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);
// //when the code for the function is only one, there is no need for a return value

// const ageUntilRetirement = (birthYear, firstname) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstname} retires in ${retirement} years`;
// }

// console.log(ageUntilRetirement(1991, 'John'));
// console.log(ageUntilRetirement(1980, 'Bob'));

// Functions calling other functions
function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}