export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

/**1.sadalīt epastu divās daļās. Otrā daļa sākot ar @. Izmanto split()
 * 2.katru epasta daļa ar savu mainīgo.
 * 3.Epasta pirmajā daļā atstāt pirmos trīs burtus
 * 4.savienot abas daļas kopā vienā masīvā ar '...@'
 */

function protectEmail(email: string) {
  let splitEmail = email.split("@");

  let firstPartOfEmail = splitEmail[0];
  let secondPartOfEmail = splitEmail[splitEmail.length - 1];
  firstPartOfEmail = firstPartOfEmail.substring(0, 3);

  return `${firstPartOfEmail}...@${secondPartOfEmail}`;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
