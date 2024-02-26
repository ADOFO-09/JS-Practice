// for(let rep = 5; rep <= 10; rep++){
//     console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
// }


// Loop of an array
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
]

// const type = [];

// for (let i=0; i<jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]);   

//     type.push(typeof jonas[i])
// }

// console.log(type)

const years = [1991, 2007, 1696, 2020];
const age = [];

for(let i = 0; i < years.length; i++){
    age.push(2037 - years[i])
}
// console.log(age)

//Continue and Break
console.log("---BREAK WITH NUMBERS-----")
for (let i=0; i<jonas.length; i++){
    if(typeof jonas[i] !== 'string') break;
    // console.log(jonas[i], typeof jonas[i])
}

console.log("---ONLY STRINGS-----")
for (let i=0; i<jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue; // skip numbers
    // console.log(jonas[i], typeof jonas[i])
}

for(let i = jonas.length -1; i >= 0; i--){
    // console.log(i, jonas[i])
}


for (let exercise = 1; exercise < 6; exercise ++){
    // console.log(`-----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        // console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`)
    }

}

// While loops
for(let rep = 5; rep <= 10; rep++){
    console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
}

let rep = 5
while(rep <= 10){
    console.log(`WHILE: Lifting weight repetition ${rep} 🏋️‍♂️`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end....');
}  

