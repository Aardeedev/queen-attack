//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    constructor({ white = [0,3], black = [7,3] } = {}) {
        if (white.join() === black.join()) {
            throw new Error('Queens cannot share the same space')
        }
        this.white = white;
        this.black = black;
    }


    toString() {
        this.board = [...Array(8)].map( (row, idx) => {
            let newRow = Array(8).fill('_');
            if ( idx === this.white[0]) {
                newRow[this.white[1]] = 'W'
            }
            if ( idx === this.black[0]) {
                newRow[this.black[1]] = 'B'
            }
            return newRow.join(' ');
        }).join('\n') + '\n'
        return this.board
    }

    canAttack() {
        const gradient = (this.white[0] - this.black[0]) / (this.black[1] - this.white[1])
        const canTake = this.white[0] === this.black[0]
            || this.white[1] === this.black[1]
            || Math.abs(gradient) === 1
        return canTake
    }
}
