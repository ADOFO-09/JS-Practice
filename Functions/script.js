'use strict';

//Default Parameters

// const bookings = [];

// const createBookings = function(
//     flightNum, 
//     numPassengers = 2,
//     price = 199 * numPassengers
//     )
// {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking)
//     bookings.push(booking)
// }

// createBookings('LH123', undefined, undefined)
// createBookings('LH123', 3);

// const flight = 'LH123';
// const Emma = {
//     name: 'Emmanuel Adofo',
//     passport: 247520600,
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 247520600){
//         alert('Checked In');
//     } else {
//         alert('Wrong passport');
//     }
// };

// checkIn(flight, Emma);
// console.log(flight);
// console.log(Emma);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(Emma);
// checkIn(flight, Emma);

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join('');
};  

const lowerFirstWord = function (str) {
    const [first, ...others] = str.split('');
    return [first.toLowerCase(), ...others].join('');
}

//Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('javascript is the best!', upperFirstWord);

transformer('javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function(){
    console.log('👋')
}

document.body.addEventListener('click', high5);
['Mark','Tony','Linda'].forEach(high5);

transformer('EMM is a good boy!', lowerFirstWord);

//Functions Returning Functions

// const greet = function (greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// } 
 
// An arrow function returning an arrow function
const greet = (greeting) =>  (name) => console.log(`${greeting} ${name}`)
    


const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

