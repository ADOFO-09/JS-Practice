'use strict';

// // function scope
// function calcAge(birthYear){
//     const age = 2037 - birthYear;

//     // function scope
//     function printAge(){
//         let output = `${firstname} is ${age} years old, born in ${birthYear}`;
//         console.log(output);

//         // block scope
//         //NB: Only const and let variables are accessible in block scope
//         //NB: var variables are accessible in function scepe
//         if(birthYear >= 1991 && birthYear <= 1996){
//             var millenial = true; // function scope

//             //The scope chain is not necessary if the variabe is accessible in the current scope
//             const firstname = "Steven";

//             // Creating new variables with the same name as outer scope's variables👆👇

//             //Reassigning outer scope variables
//             output = 'NEW OUTPUT';

//             const str = `oh, and you are a millenial, ${firstname}`; // block scope
//             console.log(str);

//             //function in a block scope
//             function add(a, b){
//                 return a + b;
//             }
//         }
//         console.log(output);
//         // console.log(str);  error occurs
//         console.log(millenial); // executes because it is still in a function scope
//         // add(2,3); // error occurs in strict mode
//         // console.log(add(2,3)); // executes correctly when not in strict mode
//     }
//     printAge();

//     return age;
// }

// const firstname = 'Jonas';
// calcAge(1991);
// // console.log(age);

 
// // Hoisting with variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'jonas'; //var variables are hoisted to the valuue of undefined
// let job = 'teacher';
// const year = 1991;

// // Hoisting with functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow);

// function addDecl(a,b){
//     return a + b;
// }

// const addExpr = function(a, b){
//     return a + b;
// }

// var addArrow = (a, b) => a + b; //var variables are hoisted to undefined

// var x = 1;
// const y = 2;
// let z = 3;

// console.log(x === window.x);
// // variables declared with var will create a property on the global window object 
// // which can lead to some implications in some cases.
// console.log(y === window.y);
// console.log(z === window.z);

//this keyword

// console.log(this);

// const calcAge = function(birthYear){
//     console.log(2027 - birthYear);
//     // console.log(this) // undefined
// }

// calcAge(1998);

// //Arrow functions do not have it own this keyword
// const calAge = (birthYear) => {
//     console.log(2020 - birthYear);
//     // console.log(this)
// }

// calAge(1995);


// The this keyword word always points to the object calling the method
var firstname =  'matilda'; // variables declared with var create a property on the global object

const jonas = {
    firstname: 'John',
    year: 1995,
    calcAge: function(birthYear){
        // console.log(this);
        console.log(birthYear - this.year);

    //Solution 1;
    // const self = this;
    // const isMillineal = function(){
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2  (The use of an arrow function which does not have it own this keyword).
    // An arrow function inherits the this keyword from the parent scope.
    const isMillineal = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
    }


    // const isMillineal = function(){          // Inside a regular function call the this  keyword is undefined
    //     console.log(this);
    //     console.log(this.year >= 1981 && this.year <= 1996);
    // };

    isMillineal();              // Inside a regular function call, the this keyword is undefined

    },
    greet: () => {              // It is not advisable to use an arrow function as a method 
        console.log(this);      // because it doesn't have it own this keyword
        console.log(`Hey ${this.firstname}`);
    },
    greet2: function(){            // This is the best approach because it has it own this keyword
        console.log(this);
        console.log(`Hey ${this.firstname}`);
    }
}
   
jonas.calcAge(2023);
jonas.greet();
jonas.greet2();

const matilda = {
    year: 2017
}

matilda.calcAge = jonas.calcAge
matilda.calcAge(2037) // The this keyword now points to matilda 

