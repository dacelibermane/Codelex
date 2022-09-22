/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

//nepieciešams izveidot interface, lai precīzi pateiktu TY kādi tipi tiks lietoti
//ja objekta interface nosaucam tāpat kā pašu objektu, tad ir pieņemts priekš likt lielo I, un nosaukums arī ar lielo burtu
//lai izveidotu key dinamisku, jo vārdi kurus skaitam ir dažādi, tādēl nevaram konkrēti uzrakstīt key nosaukumu, pimēram, olly:number. Nevaram arī vienkārši rakstīt  -> string:number
interface IWordCount {
  [key: string]: number;
}

class Words {
  wordCount: IWordCount = {};
  count(str: string) {
    //šis ir nepiecie;sams, jo sākotnēji objekts ir tukšs, tad iziet pirmo testu un saglabā property uz nākamo testu. Tādēļ šai metodei sākotnēji būtu jānodzēš iepriekšē'jais ojbekts un jāveido jauns objekts. No šīs problēmas varēja izvairīties, ja wordCount: IWordCount = {}; liktu iekšā metodē nevis ārpus tās. Attiecīgi neizmantojot nevienu this.
    this.wordCount = {};
    //izveidoju masīvu no vārdiem kuri ir teikumā
    const words = str.split(/\s/g);
    words.forEach((word) => {
      //pārbaudam vai word vispār ir strings ar kādām rakstu zīmēm, ja true, tad pāries uz nākamo if/else, ja būs false, tad attiecīgi if/else bloks neizpildīsies
      if (word) {
        word = word.toLowerCase();
        if (this.wordCount.hasOwnProperty(word)) {
          //ja ir true, tad man jāpiekļūst vērtībai (word) un tā jāapdeito
          //šeit punkta vietā izmantojam kvadrātiekavas, jo vērtība nav statiska, bet gan mainīga(par cik ar forEach ejam cauri visiem teikuma vērdiem. Punktu izmanto, ja vērtība ir statisak - mēs zinām kā vertību sauc)
          this.wordCount[word]++;
        } else {
          this.wordCount[word] = 1;
        }
      }
    });

    return this.wordCount;
  }
}

// class Words {

//   count(str: string) {
//     wordCount: IWordCount = {};
//     const words = str.split(/\s/g);
//     words.forEach((word) => {s
//       if (word) {
//         word = word.toLowerCase();
//         if (wordCount.hasOwnProperty(word)) {
//           wordCount[word]++;
//         } else {
//           wordCount[word] = 1;
//         }
//       }
//     });

//     return wordCount;
//   }
// }

export { Words };
