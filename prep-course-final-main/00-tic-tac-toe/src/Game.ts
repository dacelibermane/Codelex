export type XO = "X" | "O" | "-";

export class Game {
  //šim jāatrodas klasē, bet ārpus metodēm. Tādējādi cells būd pieejams jebkurā metodē. Ne tā kā bija sākotnēji, ka cells atradās getCells() metodē. Jo, ja ievietojam to kādā konkrētā metodē, tad pēcāk to izmantojot  citā metodē, rezultāts nemainīsies - tas būs tāds pats kā bija norādīts getCells() metodē.
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  //šeit nodefinējam atsevišķu mainīgo gājienam, jo tas pats kas ar cell, ja turn ieliksim metodē tad to izsaucot vienmēr dabūsim to pašu statisko vērtību, kura nodefinēta metodē. Bet ja izceļam to ārā no metodes, tad to iespējams dinamiski mainīt. Kā starta vērtību turn ieliekam "X", jo spēli vienmēr sak X.
  turn: XO = "X";
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    const cells = this.cells;
    //rows
    if (cells[0] === cells[1] && cells[1] === cells[2]) {
      return cells[0];
    }
    if (cells[3] === cells[4] && cells[4] === cells[5]) {
      return cells[3];
    }
    if (cells[6] === cells[7] && cells[7] === cells[8]) {
      return cells[6];
    }
    //columns
    if (cells[0] === cells[3] && cells[3] === cells[6]) {
      return cells[0];
    }
    if (cells[1] === cells[4] && cells[4] === cells[7]) {
      return cells[1];
    }
    if (cells[2] === cells[5] && cells[5] === cells[8]) {
      return cells[2];
    }
    //diagonals
    if (cells[0] === cells[4] && cells[4] === cells[8]) {
      return cells[0];
    }
    if (cells[2] === cells[4] && cells[4] === cells[6]) {
      return cells[2];
    }
    return "-";
  }

  isTie(): boolean {
    //neizšķirts ir tad, ja visas šūnas ir aizpildītas
    //ja šūnās nav atrodams tukšs lauciņš'-', t.i. visas šūnas ir aizpildītas ar X vai O
    // atgriez true, ja šie abi nosacījumi ir true
    return !this.getCells().includes("-") && this.getWinner() === "-";
  }

  onClick(i: number): void {
    //ieliekam visu if, lai pateiktu to ka, ja ir domuzīme, tad dari attiecīgi to kas ir norādīts koda blokā, ja tur jau ir kaut kas cits (X vai O), tad nedari neko
    if (this.cells[i] !== "-" || this.getWinner() !== "-") return;
    this.cells[i] = this.turn;
    this.turn = this.turn === "X" ? "O" : "X";
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.turn = "X";
  }
}
