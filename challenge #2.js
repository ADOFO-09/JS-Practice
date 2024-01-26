// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 2


// const calcAverage = (scoreD1, scoreD2, scoreD3,scoreK1,scoreK2,scoreK3) => {
//     avgDolhins = scoreD1 + scoreD2 + scoreD3 / 3;
//     avgKoalas = scoreK1 + scoreK2 + scoreK3 / 3;
//     return [avgDolhins, avgKoalas];
// }

// const checkWinner = function(averages){
//     const avgDolhins = averages[0];
//     const avgKoalas = averages[1];
//     if (avgDolhins >= 2 * avgKoalas){
//         console.log(`Dolhins win with ${avgDolhins} points`)
//     }else if (avgKoalas >= 2 * avgDolhins){
//         console.log(`koalas wins with ${avgKoalas} points `)
//     }else{
//         console.log("No one wins")
//     } 
// }

// const averages = calcAverage(44, 23, 71, 65, 54, 49);
// checkWinner(averages);

// This function checks the average of the scores
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(9, 4, 5));

let scoreDolhins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23,34, 27);
console.log(scoreDolhins, scoreKoalas);

// This function checks the winner according to the rules above
const checkWinner = function(avgDolhins, avgKoalas){
    if (avgDolhins >= 2 * avgKoalas){
        console.log(`Dolhins wins 🏆 (${avgDolhins} vs. ${avgKoalas})`)
    }else if (avgKoalas >= 2 * avgDolhins){
        console.log(`Koalas wins 🏆 (${avgKoalas} vs. ${avgDolhins})`)
    }else{
        console.log('No team wins......')
    }
}
// Test 1
checkWinner(scoreDolhins, scoreKoalas);

// Test 2
scoreDolhins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolhins, scoreKoalas);
checkWinner(scoreDolhins, scoreKoalas);