import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  //testējam kad spēlētājs ieklikšķina šūnā parādās X, kā arī nomainās gājiens uz 'O'
  it("should be able to click on cell and place 'X' in it ", () => {
    const game = new Game();

    game.onClick(0);
    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  //testējam vai nomainās gājiens
  it("should be able to alternate between turns ", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    expect(game.getCells()).toEqual([
      "X",
      "O",
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  //nevar atkārtoti klikšķin;at uz jau aizpildītas šūnas un mainīt X uz O un otrādi
  it("should not be able to click twice on a cell ", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);
    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should win the game if a row is filled by a player ", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);
    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "O",
      "O",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win the game if a column is filled by a player ", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    game.onClick(4);
    game.onClick(3);
    game.onClick(7);
    expect(game.getCells()).toEqual([
      "X",
      "O",
      "X",
      "X",
      "O",
      "-",
      "-",
      "O",
      "-",
    ]);
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });

  it("should win the game if a diagonal is filled by a player ", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(3);
    game.onClick(8);
    expect(game.getCells()).toEqual([
      "X",
      "O",
      "-",
      "O",
      "X",
      "-",
      "-",
      "-",
      "X",
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
  it("should be tie if game field is filled but there is no winner  ", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(6);
    game.onClick(4);
    game.onClick(8);
    game.onClick(7);
    game.onClick(5);
    game.onClick(2);
    expect(game.getCells()).toEqual([
      "X",
      "O",
      "X",
      "X",
      "X",
      "O",
      "O",
      "X",
      "O",
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });
});
