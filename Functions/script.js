'use strict';

//Default Parameters

const bookings = [];

const createBookings = function(
    flightNum, 
    numPassengers = 2,
    price = 199 * numPassengers
    )
{
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking)
    bookings.push(booking)
}

createBookings('LH123', undefined, undefined)
createBookings('LH123', 3);
