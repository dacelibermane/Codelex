export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(triangleRows: number): void {
  let symbol = "";
  for (let i = 1; i <= triangleRows; i++) {
    for (let j = 0; j < i; j++) {
      symbol += "*";
    }
    symbol += "\n";
  }
  console.log(symbol);
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
