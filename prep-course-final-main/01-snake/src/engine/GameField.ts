import { Cell } from "./Cell";

export class GameField {
  /**
   * Called when level completed
   */
  apples: Cell[] = [
    new Cell(18, 16),
    new Cell(20, 16),
    new Cell(22, 16),
    new Cell(24, 16),
    new Cell(26, 16),
  ];

  seed(): void {}

  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean {
    return false;
  }

  removeApple(cell: Cell): void {}

  isEmpty(): boolean {
    return false;
  }
}
