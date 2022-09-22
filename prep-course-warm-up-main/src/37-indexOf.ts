export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// <T>(arr: Array<T>, valueToRemove: T): Array<T> -> TY generics.
//generics makes it easier to write reusable code and you don't need to explicitly define the type that is used.

/**To remove elements from an array in an immutable way, array copying is required. You need a new data structure because you cannot change the first – that would be mutation. You can also think of this as creating a new array without the elements you wanted removed. https://jaketrent.com/post/remove-array-element-without-mutating */

// You are allowed to edit only this function
type T_arrayElem = string | number;
function remove(arr: T_arrayElem[], valueToRemove: T_arrayElem): T_arrayElem[] {
  const newArr = [...arr]; //use spread operator to copy original array into a whole new array
  const elToBeRemoved = arr.indexOf(valueToRemove);
  // only splice array when item is found, jo indexof(n) atgriež -1 ja elements nav masīvā
  // 2nd parameter in splice means remove one item only
  if (elToBeRemoved > -1) newArr.splice(elToBeRemoved, 1);
  return newArr;
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);
console.log(numbers);
console.log(names);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
