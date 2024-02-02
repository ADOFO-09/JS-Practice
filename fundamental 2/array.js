// Arrays

// const friend1 = 'Micheal';
// const friend2 = 'Yussif';
// const friend3 = 'John';

// const friends = ['Micheal', 'Yussif','Simon']
// console.log(friends)
// console.log(friends.length)
// console.log(friends[friends.length - 1])

// const firstname = 'Jonas'
// const jonas = [friends, 'Emmanuel', 2037 - 1912, 'teacher' ]
// console.log(jonas)
// console.log(jonas.length)

// // Exercise
// const calcAge = function(birthYear){
//     return 2037 - birthYear
// }

// const years = [1997, 2021, 2037, 1948]
// const age1 = calcAge(years[0]);
// const age2  = calcAge(years[1]);
// console.log(age1, age2);

// const ages = [calcAge(years[2]), calcAge(years[0]),
// calcAge(years[years.length - 1])];
// console.log(ages)


// Array Methods

// add elements
const friends = ['Micheal', 'Yussif', 'Francis']
const newLength = friends.push('Adofo')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

// remove elements 
const popped = friends.pop()
console.log(popped)
console.log(friends)

const shiftElement = friends.shift()
console.log(shiftElement)
console.log(friends)

console.log(friends.indexOf('Micheal')); // 0
console.log(friends.indexOf('Francis'));  // 2 
console.log(friends.indexOf('Emmanuel')); // -1

console.log(friends.includes('Micheal')) // True
console.log(friends.includes('Gideon')) // False

if (friends.includes('Micheal')){
    console.log('You have a friend called Micheal')
}
