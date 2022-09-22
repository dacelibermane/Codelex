/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

//1.notīrīt stringu - -> replace illegar char uz " "
//regex norādīts ka noņemt visas rakstuzīmes(0, 5,! utt.) izņemot alfabeta burtus no a-z, neatkarīgi no tā vai liels vai mazs burts (i - case insensitive)
//[^a-z] - not letters a to z
//2.deklarēt tukšu stringu
//3.piekļūt katram vārdam - split(splito vārdus pēc atstrapēm un domu zīmēm, tādēl ir regex) -> masīvu forEach/map
//4.iegūt vārda pirmo burtu
//5.toUpperCase
//6. burtu līmēt klāt result stringam
//Ieliek darbības if, jo testā kurā bija domuzīme, tā ir tukša vērtība -> tukšs strings un uz tukšu stringu nevar izsaukt toUpperCase.
//Tādēļ ar if pārbaudam ja word = true tas ir, ja vārdam ir kaut kāda vērtība, tad attiecīgi piekļūstam pirmajam burtam un pārveidojam to par lielo burtu. Ja word vērtība ir falsy, attiecīgi nedaram neko.
//7.atgriezt result

function parse(input: string) {
  const clearInput = input.replace(/[^a-z\s-]/gi, "");
  let result = "";
  clearInput.split(/[- ]/g).forEach((word) => {
    if (word) {
      const firstLetterUpperCase = word[0].toUpperCase();
      result += firstLetterUpperCase;
    }
  });
  return result;
}

export { parse };
