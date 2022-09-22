/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
  // array.sort((a, b) => b - a);
  // return array[1];
  let largestNum = array[0];
  let secondLargest = array[0];

  // [2, 0, 23, 0, 57, 1, 230];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) {
      console.log(array[i]);
      secondLargest = largestNum;
      largestNum = array[i];
    }
  }
  return secondLargest;
}

export { secondLargest };
