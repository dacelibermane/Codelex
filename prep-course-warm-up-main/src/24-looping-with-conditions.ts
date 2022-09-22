export {};

function onlyTheAces(arr: string[]): string[] {
  return arr.filter((el) => el === "Ace");
}

// function onlyTheAces(arr: string[]): string[] {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "Ace") {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
