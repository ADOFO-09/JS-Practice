'use strict';

// function scope
function calcAge(birthYear){
    const age = 2037 - birthYear;

    // function scope
    function printAge(){
        let output = `${firstname} is ${age} years old, born in ${birthYear}`;
        console.log(output);

        // block scope
        //NB: Only const and let variables are accessible in block scope
        //NB: var variables are accessible in function scepe
        if(birthYear >= 1991 && birthYear <= 1996){
            var millenial = true; // function scope

            //The scope chain is not necessary if the variabe is accessible in the current scope
            const firstname = "Steven";

            // Creating new variables with the same name as outer scope's variables👆👇

            //Reassigning outer scope variables
            output = 'NEW OUTPUT';

            const str = `oh, and you are a millenial, ${firstname}`; // block scope
            console.log(str);

            //function in a block scope
            function add(a, b){
                return a + b;
            }
        }
        console.log(output);
        // console.log(str);  error occurs
        console.log(millenial); // executes because it is still in a function scope
        // add(2,3); // error occurs in strict mode
        // console.log(add(2,3)); // executes correctly when not in strict mode
    }
    printAge();

    return age;
}

const firstname = 'Jonas';
calcAge(1991);
// console.log(age);

 