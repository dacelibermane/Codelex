/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */
/**
 * sort() salīdzinot b (jeb otrā skaitļa) garumu ar pirmā (a) garumu iegūstam, skaitļus dilstošā sevcībā - tātad no lielākā skaita uz mazāko.
 * Labs video par sort()
 * RegEx pievienojot "+" atbrīvojos no tukšajiem stringiem, kas veidojas noņemot nevajadzīgos simbolus ->[ 'fun', '', '', '', 'time' ], tā vietā iegūstu ->[ 'fun', 'time' ]
 */
function longestWord(sen: string) {
  const splitSen = sen.split(/[^a-zA-Z]+/g);
  console.log(splitSen);
  const longestWordInSen = splitSen.sort((a, b) => {
    console.log(b.length - a.length);
    return b.length - a.length;
  });
  console.log(longestWordInSen);
  return longestWordInSen[0];
}

export { longestWord };
