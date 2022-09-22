export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

/* Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.*/

const min = (array: number[]): number => Math.min(...array);
// const min = (array: number[]) => Math.min.apply(null, array);

const max = (array: number[]): number => {
  // pirmais elements sākotnēji ir lielākais skaitlis
  let max = array[0];
  // for loop salīdzina pirmo elementu ar katru nākamo, jā nākamais elemnts ir lielāks par [0], tad tas kļūst par lielāko skaitli utt. līdz visi skaitļi ir salīdzināti
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

//sort neizveido jaunu masīvu, bet gan sakārto jau esošo masīvu. Šajā gadījumā masīvs tiek sakārtots [-3, 6, 9], attiecīgi ar [arrayLenght - 1] piekļūst pēdējam elemntam, jo tas ir lielākais. Attiecīgi ar min piekļūst pirmajam elmentam, kurš ir mazākais.
//Taču šis nestrādās ar pēdējo piemeru, jo atgriež 1000, nevis 3.

const largestNumber = (array: number[]): number => {
  let arrayLenght = array.length;
  array.sort();
  console.log(array);
  return array[arrayLenght - 1];
};

const smallestNumber = (array: number[]): number => {
  array.sort();
  return array[0];
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
console.log(largestNumber([9, -3, 6])); // Expected output: 9
console.log(smallestNumber([9, -3, 6])); // Expected output: 9
console.log(smallestNumber([9, 3, 6, 1000])); // Expected output: 9
