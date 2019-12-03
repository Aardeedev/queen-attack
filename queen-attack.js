//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({ white = [0, 3], black = [7, 3] } = {}) {
    if (white.join() === black.join()) {
      throw new Error('Queens cannot share the same space');
    }
    this.white = white;
    this.black = black;

    this.board = [...Array(8)].map(() => Array(8).fill('_'));
    this.board[white[0]][white[1]] = 'W';
    this.board[black[0]][black[1]] = 'B';
  }

  toString() {
    return this.board.map(row => row.join(' ')).join('\n') + '\n';
  }

  canAttack() {
    const difX = this.white[0] - this.black[0];
    const difY = this.white[1] - this.black[1];
    const onDiagonal = Math.abs(difX / difY) === 1;

    return !difX || !difY || !!onDiagonal;
  }
}
