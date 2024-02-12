const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter','Steven']
};

console.log(jonas);

// How to get data from object
console.log(jonas.firstName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]); 

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstname, lastname, age, job and friends")
jonas[interestedIn]? console.log(jonas[interestedIn]): 
console.log('Wrong request!, Choose between firstname, lastname, age, job and friends');

jonas.location = 'Ghana';
jonas['email'] = 'jonas@gmail.com';
console.log(jonas);

// Jonas has 3 friends and his best friend is called Michael
console.log(jonas['firstName']+' has '+ jonas['friends'].length + ' friends and his best friend is '+ jonas.friends[0]);

