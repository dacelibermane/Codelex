import { Cell } from "./Cell";
import { Direction } from "./Direction";
import { GameField } from "./GameField";

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";

  setDirection(newDirection: Direction) {
    this.direction = newDirection;
  }

  move() {
    //viens move izsaukums liek čūska pakustēties par 1 klucīti uz priekšu. Tādēļ testā pietiek paŗbaudīt vai čūska pakustās par vienu klucīti uz priekšu
    // 1 sekundes laikā noiet 10 lauciņus
    //astes pēdējo elementu jāpārceļ aiz čūskas galvas. Čūskas sākums ir tās aste, galva beigas tādēļ ar push() astei pievienojam galvas klucīti. un ar shift() noņemam pēdējo elementu no astes
    //taču mēs nevaram vienkārši rakstīt -> this.tail.push(this.head). Ir jāizveido jauns objekts, jo mums nevajag referenci uz jau esošo objektu head: Cell = new Cell(2, 0). Tātad nevis ņemt veco/jau esošo objektu un to mainīt, bet gan veidoju pilnīgi jaunu obektu un veco izdzēšu(metodes ietvaros). Tas pats arī attiecas uz galvu -->jāveido jauns objekts
    const oldHead = this.head;
    this.tail.push(new Cell(oldHead.x, oldHead.y));
    this.tail.shift();
    if (this.direction === "Right") {
      this.head = new Cell(oldHead.x + 1, oldHead.y);
    } else if (this.direction === "Down") {
      this.head = new Cell(oldHead.x, oldHead.y + 1);
    } else if (this.direction === "Left") {
      this.head = new Cell(oldHead.x - 1, oldHead.y);
    } else {
      this.head = new Cell(oldHead.x, oldHead.y - 1);
    }
  }

  grow() {
    //
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    return false;
  }
}
