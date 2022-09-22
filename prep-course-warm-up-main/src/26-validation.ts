export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

/**1.iziet cauri excludedNumspārbaudīt vai skaitlis ir skaitlis un integer
 * 2.pārbaudīt vai skaitlis ir skaitlis un integer
 */
const excludedNums: number[] = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(num: number | string): boolean {
  for (let i = 0; i < excludedNums.length; i++) {
    if (num === excludedNums[i]) {
      return false;
    }
  }
  // arī ar % 1 var pārbaudīt vai skaitlis ir intger. Ja atlikums ir 0, tas nozīmē, ka tas ir vesels skaitlis. num % 1 === 0

  if (typeof num === "number" && Number.isInteger(num)) {
    return true;
  }
  return false;

  //saīsināts varints
  // return typeof num === "number" && Number.isInteger(num);
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
