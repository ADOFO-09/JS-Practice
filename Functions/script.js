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

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split('');
//     return [first.toUpperCase(), ...others].join('');
// };  

// const lowerFirstWord = function (str) {
//     const [first, ...others] = str.split('');
//     return [first.toLowerCase(), ...others].join('');
// }

// //Higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('javascript is the best!', upperFirstWord);

// transformer('javascript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function(){
//     console.log('👋')
// }

// document.body.addEventListener('click', high5);
// ['Mark','Tony','Linda'].forEach(high5);

// transformer('EMM is a good boy!', lowerFirstWord);

// //Functions Returning Functions

// // const greet = function (greeting){
// //     return function(name){
// //         console.log(`${greeting} ${name}`)
// //     }
// // } 
 
// // An arrow function returning an arrow function
// const greet = (greeting) =>  (name) => console.log(`${greeting} ${name}`)
    


// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');


// The call and apply methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum , name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        
        this.bookings.push({flight:`${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(239, 'Adofo Emmanuel');
lufthansa.book(635, 'Micheal Angelo'); 

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

// Does not work
// book(23, 'Sandra Boakye');

book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings)

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
}

book.call(swiss, 430, 'Anita Adofo')
console.log(swiss)

const flightData = [543, 'Richmond']
// book.apply(swiss, flightData ) this method is old
book.call(swiss, ...flightData)
console.log(swiss);

//Bind method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const BookSW = book.bind(swiss); 

bookEW(23, 'Steven Williams');
BookSW(24, 'Emmanuel')

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Emmanuel Adofo');
bookEW23('Danso Francis');

//Binding with Event LIsteners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++
    console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); 
// the rate is preset to 0.23

console.log(addVAT(100));
console.log(addVAT(23));

//function returning another function
const addTaxRate = function (rate){
    return function(value){
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));