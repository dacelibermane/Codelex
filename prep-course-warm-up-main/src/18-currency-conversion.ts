export {};

/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 */

// You are allowed to change only this function
function convertToUSD(price: number): string {
  let dollars = price * 1.4;
  return dollars.toFixed(2);
  // let formatCurrency = new Intl.NumberFormat(undefined, {
  //   style: "currency",
  //   currency: "USD",
  // });
  // return formatCurrency.format(dollars);
}

const product = "You don't know JS";
const price = 19.99;
const priceInUSD = convertToUSD(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);

/* Expected output:

    > Product: You don't know JS
    > Price: $27.99

*/
