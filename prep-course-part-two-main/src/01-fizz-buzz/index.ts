/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

//no sākuma netiku pie risinājuma, jo pirmā lieta ko pārbaudīju if bija i % 3,tad % 5 un tikai beigās abus kopā. Tādēļ skaitlim 15 uzrādījās tikai fizz - jo pirmā lietu kuru pārbauda kods ir i % 3 un ja tas ir true, tad pie šī else if (i % 3 === 0 && i % 5 === 0) nemaz netiek.
//Netiku pie fizzBuzz,
// To have a bug-free solution, we need to put the most specific conditions on the top and the most generic ones on the bottom.

function fizzBuzz(n: number) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
//Šis variants nav pārāk labs - ja būtu jāveic izmaiņas kodā(ja tas būtu krietni vien garāks) nomainot 5, piemēram, pret 6, tad būtu lielāka iespēja nokļūdīties

export { fizzBuzz };
