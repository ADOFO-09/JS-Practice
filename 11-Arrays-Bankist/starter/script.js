'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements){
  containerMovements.innerHTML = '';

  movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
       <div class="movements__row">
          <div class="movements__type 
          movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
} 


const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`
}



const calcDisplaySummary = function(acc){
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, income) => acc + income, 0);
    labelSumIn.textContent = `${incomes}€`

  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, out) => acc + out, 0);
    labelSumOut.textContent = `${Math.abs(withdrawals)}€`
  
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit  => (deposit * acc.interestRate) / 100)
    .filter((int , i, arr) => {
      return int >= 1; // includes movements with value above or equal to 1
    })
    .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`
}


const createUsernames = function(accs){
  accs.forEach((acc) =>
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('')
  )
}
createUsernames(accounts);

let currentAccount;
btnLogin.addEventListener('click', function(e){
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount)

    if(currentAccount.pin === Number(inputLoginPin.value)){
       // Display UI and welcome message
       labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
       containerApp.style.opacity = 100; 

       // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';

       // Display movements
        displayMovements(currentAccount.movements);

       // Display balance
        calcDisplayBalance(currentAccount.movements);

       // Display summary
        calcDisplaySummary(currentAccount);
    }
});





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log(arr.slice());
console.log([...arr]);

// SPLICE  --It mutates the original array
// console.log(arr.splice(2));
// console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // The second parameter means the number of elements to delete after index 1
console.log(arr);

// REVERSE --It mutates the original array
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length -1]);
console.log(arr.at(-1));
console.log(arr.slice(-1)[0]);

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){}
for (const [i, movement] of movements.entries()){
  if(movement > 0 ){
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  }else{
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function(mov, i){
  if(mov > 0){
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  }else{
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
})
*/

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// // MAP
// currencies.forEach(function(value,key,map){
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD' , 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _ , map){
//   console.log(`${value}: ${value}`);
// });

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov){
//   return mov * eurToUsd;
// });
// const movementsUSD = movements.map(mov => mov * eurToUsd)
// console.log(movements);
// console.log(movementsUSD);


// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescription = movements.map((mov, i) => 
//   `Movement ${i + 1}: You  ${mov > 0? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementsDescription);

// filter method functions with respect to a condition
//  const deposit = movements.filter(function(mov){
//    return mov > 0;
//  })

// console.log(movements);
// console.log(deposit);

// const depositfor = [];
// for(const mov of movements) if(mov > 0) depositfor.push(mov);
// console.log(depositfor);

// const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

// const withdrawalfor = [];
// for(const mov of movements) if(mov < 0) withdrawalfor.push(mov);
// console.log(withdrawalfor);

// Reduce Method
// const balance = movements.reduce(function(acc, cur,i, arr){
//    console.log(`Iteration ${i}: ${acc}`);
//    return acc + cur
// }, 0)
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

// //Maximum value 
// const max = movements.reduce((acc, mov) => {
//     if(acc > mov) return acc;
//     else return mov; 
// }, movements[0]);
// console.log(max);

// const min = movements.reduce((acc, mov) => {
//   if(acc > mov) return mov;
//   else return acc;
// }, movements[0]);
// console.log(min);

const eurToUsd = 1.1;

// PIPELINE
//  Chaining Methods
// Methods can be chained if preceding method returns an array
const totalDeposit = movements
.filter(mov => mov > 0)
// .map(mov => mov * eurToUsd)
.map((mov, i , arr) => {
    return mov * eurToUsd;
})
.reduce((acc, mov) => acc + mov, 0);
// Reduce returns a value therefore a method can not be chained to it
console.log(totalDeposit);


// The find method
// The find method is used to find one element in a collection
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements)
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account)

