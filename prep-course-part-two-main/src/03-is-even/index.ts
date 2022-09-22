/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

/**pēc pēdējā skaitļa, skaitļu virknē varu noteikt vai skaitlis ir pāra vai nepāra. Tātad skaitļi 0, 2, 4, 6, 8 -> ir pāra. Deklarēju even kā globālu mainīgo
  Pārveidoju skaitļus uz string, lai varu izveidot masīvu un piekļūt pēdējam skaitlim un ar split to sadalu. Pieliku [0], lai piekļūtu tikai veselajam skaitlim. Kā seperatoru split izmantoju "." un tādējādi daļskaitļi 3092348903.28409238409 un 0.15 tiek atgriezti kā masīvs ar divām vērtībām -> ['3092348903', '28409238409'] un ['0', '15']. Par cik mani interesē tikai veseļi skaitļi, tad skaitļi aiz komata man nav nepieciešami, lai veiktu pārbaudi. Pieliku [0], lai tādējādi piekļūtu masīva pirmajam elementam, kas ir veselais skaitlis.
  Tad piekļūstu masīva pēdejam elementam [numToString.length - 1]. -1 jo, piemēram pārvēršot skaitli '123' masīvā un izsaucot lenght iegūstu 3, jo masīvā ir trīs vērtības, bet indeksi ir no 0 līz 2
 The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 tad ar includes() pārbaudu vai EVEN_NUMBERS atrodas skaitlis jeb pēdējais cipars kurš tiek pārbaudīts.
*/

const EVEN_NUMBERS: number[] = [0, 2, 4, 6, 8];
function isEven(n: number) {
  const numToString = n.toString().split(".")[0];
  const lastDigitString = numToString[numToString.length - 1];
  return EVEN_NUMBERS.includes(parseInt(lastDigitString));
}

export { isEven };
