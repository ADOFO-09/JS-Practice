// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter','Steven']
// };

// console.log(jonas);

// // How to get data from object
// console.log(jonas.firstName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first'+ nameKey]);
// console.log(jonas['last'+ nameKey]); 

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstname, lastname, age, job and friends")
// jonas[interestedIn]? console.log(jonas[interestedIn]): 
// console.log('Wrong request!, Choose between firstname, lastname, age, job and friends');

// jonas.location = 'Ghana';
// jonas['email'] = 'jonas@gmail.com';
// console.log(interestedIn);

// // Jonas has 3 friends and his best friend is called Michael
// console.log(jonas['firstName']+' has '+ jonas['friends'].length + ' friends and his best friend is '+ jonas.friends[0]);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);

// OBJECT METHOD
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1998,
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter','Steven'],
    hasDriversLicense: false,
    // calcAge: function(birthYear){
    //     return 2037 - birthYear
    // }

    // calcAge: function(){
    //     console.log(this)
    //     return 2037 - this.birthYear
    // }

    calcAge: function(){
    this.age = 2037 - this.birthYear
        return this.age
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense? 'a': 'no'} driver's license`
    }
};

// console.log(jonas['calcAge'](1998))
console.log(jonas.calcAge())
console.log(jonas.age)

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense? 'a': 'no'} driver's license`)
console.log(jonas.getSummary());
