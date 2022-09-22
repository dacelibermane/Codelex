/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */
//1. izvilkt visus patskaņus ārā no vārda, izmantojam match
//The match() method retrieves the result of matching a string against a regular expression. It returns array
// ja match() neko neatrod (piemēram, visi ir līdzskaņi), tad tiek atgriezts null, tādēļ rakstam === null, ja masīvs nav atrasts, tad atgriežam 0, visos citos gadījumos atgriežam masīva garumu.
//vowels.length -> atgriež masīva garumu, kas arī parāda to cik patskaņu ir katrā piemērā
function vowels(s: string) {
  const vowelsArr = s.match(/[aeiou]/gi);
  return vowelsArr === null ? 0 : vowelsArr.length;
}

export { vowels };
