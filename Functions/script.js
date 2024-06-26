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

const flight = 'LH123';
const Emma = {
    name: 'Emmanuel Adofo',
    passport: 247520600,
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 247520600){
        alert('Checked In');
    } else {
        alert('Wrong passport');
    }
};

checkIn(flight, Emma);
console.log(flight);
console.log(Emma);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(Emma);
checkIn(flight, Emma);