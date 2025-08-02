const { weightedSum, weightedGroupSum, buy, sell } = require('./helperfunktions');


const value1 = 80;

const test1 = {
  values: [
    { value: value1, weight: 3 },
    { value: 70, weight: 2 },
    { value: 90, weight: 5 },
  ],
  weight: 4,
};

const test2 = {
  values: [
    { value: 75, weight: 4 },
    { value: 65, weight: 3 },
    { value: 85, weight: 3 },
  ],
  weight: 3,
};

const test3 = {
  values: [
    { value: 60, weight: 2 },
    { value: 55, weight: 3 },
    { value: 100, weight: 10 },
    { value: 70, weight: 8 },
  ],
  weight: 2,
};

const test4 = {
  values: [
    { value: 60, weight: 2 },
    { value: 55, weight: 3 },
    { value: 70, weight: 8 },
  ],
  weight: 2,
};

const groups = [test1, test2, test3, test4];

const overallSustainability = weightedGroupSum(groups);

console.log('gesamter score:', overallSustainability.toFixed(2));






let balance = 1000;

console.log(`${balance}`);
console.log();

function checkBalance() {
  console.log(`${balance.toFixed(2)}`);
  return balance;
}

function performBuy(amount) {
  balance = buy(amount, balance);
  console.log(`${balance.toFixed(2)}`);
  return balance;
}

function performSell(amount) {
  balance = sell(amount, balance);
  console.log(`${balance.toFixed(2)}`);
  return balance;
}

checkBalance();
console.log();

performBuy(300); // Buy obj1
console.log();

performSell(75); // Sell obj2
console.log();
