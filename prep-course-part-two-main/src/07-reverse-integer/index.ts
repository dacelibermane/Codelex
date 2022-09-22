/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

import { parse } from "../00-acronym";

/**1. jāpārvēršs number to string, lai varētu izmantot split metodi
 * 2.izsaukt split metodi, lai sadalītu skaitli, tad reveres(), lai to apgrieztu un visbeidzpt join(), lai savienotu visus masīvu elementus un atkal iegūtu stringu. Pēc šīs darbības skaitlis -15 kļūst par 51-
 * 3. Tad pārvēršam skaitli atpakaļ par number ar parseFloat, jo tas noņem nulles skaitļa sākumā - 005 kļūst par 5. parseFloat() will always ignore the leading zeros
 * 4. Lai negatīvs skaitlis paliktu tāds pats negatīvs izmantojam Math.sign()
 */
//  function reverse(int: number) {
//   const numToStr = int.toString();
//   const reveresStr = numToStr.split("").reverse().join("");
//   console.log(reveresStr);
//   const reversedStrToNum = parseFloat(reveresStr);
//   console.log(reversedStrToNum);
//   return reversedStrToNum * Math.sign(int);
// }
function reverse(int: number) {
  return (
    parseFloat(int.toString().split("").reverse().join("")) * Math.sign(int)
  );
}

export { reverse };
