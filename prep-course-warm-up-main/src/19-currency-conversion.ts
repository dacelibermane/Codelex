export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

const RATE_BRL = 5.26;
const RATE_USD = 1.01;
const RATE_GBP = 0.84;
const RATE_JPY = 137.46;

function convertCurrency(price: number, rate: number): string {
  let transactionFee = price * 0.01;
  let exchangeRate = price * rate;
  return (transactionFee + exchangeRate).toFixed(2);
}

// // You are allowed to change this function
// function convertToUSD(price: number): string {
//   let transactionFee = price * 0.01;
//   let exchangeRate = price * 1.4;
//   return (transactionFee + exchangeRate).toFixed(2);
// }
// // You are allowed to change this function
// function convertToBRL(price: number): string {
//   let transactionFee = price * 0.01;
//   let exchangeRate = price * 5.3;
//   return (transactionFee + exchangeRate).toFixed(2);
// }

const product = "You don't know JS";
const price = 12.5;
// const priceInUSD = convertToUSD(price);
// const priceInBRL = convertToBRL(price);

const priceInBRL = convertCurrency(price, RATE_BRL);
const priceInUSD = convertCurrency(price, RATE_USD);
const priceInGBP = convertCurrency(price, RATE_GBP);
const priceInJPY = convertCurrency(price, RATE_JPY);

console.log(`Price: R$${priceInBRL}`);
console.log(`Price: $${priceInUSD}`);
console.log(`Price: £${priceInGBP}`);
console.log(`Price: ¥${priceInJPY}`);

// console.log("Product: " + product);
// console.log("Price: $" + priceInUSD);
// console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
