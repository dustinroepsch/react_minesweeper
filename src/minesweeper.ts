import { immerable, produce } from 'immer'

export interface Cell {
    isMine: boolean
    state: 'hidden' | 'revealed' | 'flagged'
    numberOfNeighbourMines: number
}

interface Coordinate {
    row: number
    col: number
}

export default class Minesweeper {
    [immerable] = true

    public readonly cells: Cell[][]
    public gamestate: 'won' | 'lost' | 'playing' = 'playing'

    constructor(
        public readonly rows: number,
        public readonly cols: number,
        public readonly mines: number
    ) {
        this.cells = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => ({
                isMine: false,
                state: 'hidden',
                numberOfNeighbourMines: 0,
            }))
        )

        this.placeMines()
        this.calculateNeighborMines()
    }

    public clickCell(row: number, col: number): Minesweeper {
        return produce(this, (draft) => {
            const cell = draft.cells[row][col]
            if (cell.isMine) {
                draft.gamestate = 'lost'
                return
            }

            const cellsToReveal: Coordinate[] = [{ row, col }]

            while (cellsToReveal.length > 0) {
                const { row, col } = cellsToReveal.shift()!
                draft.cells[row][col].state = 'revealed'
                if (draft.cells[row][col].numberOfNeighbourMines === 0) {
                    const neighors = this.getInBoundNeighbourCoordinates(
                        row,
                        col
                    )
                    for (const neighbor of neighors) {
                        if (
                            draft.cells[neighbor.row][neighbor.col].state ===
                            'hidden'
                        ) {
                            cellsToReveal.push(neighbor)
                        }
                    }
                }
            }
        })
    }

    public toggleFlagged(row: number, col: number): Minesweeper {
        return produce(this, (draft) => {
            if (!this.inBounds(row, col)) {
                return
            }
            const cell = draft.cells[row][col]
            if (cell.state === 'hidden') {
                cell.state = 'flagged'
            } else if (cell.state === 'flagged') {
                cell.state = 'hidden'
            }
        })
    }

    // only call from constructor, edits in place
    private placeMines(): void {
        let minesLeftToPlace = this.mines
        while (minesLeftToPlace > 0) {
            const row = Math.floor(Math.random() * this.rows)
            const col = Math.floor(Math.random() * this.cols)
            if (!this.cells[row][col].isMine) {
                this.cells[row][col].isMine = true
                minesLeftToPlace--
            }
        }
    }

    // only call from constructor, edits in place
    private calculateNeighborMines(): void {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                for (const {
                    row: neighborRow,
                    col: neighborCol,
                } of this.getInBoundNeighbourCoordinates(row, col)) {
                    if (this.cells[neighborRow][neighborCol].isMine) {
                        this.cells[row][col].numberOfNeighbourMines++
                    }
                }
            }
        }
    }

    private inBounds(row: number, col: number): boolean {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols
    }

    private *getInBoundNeighbourCoordinates(
        row: number,
        col: number
    ): Generator<Coordinate> {
        const offsets = [-1, 0, 1]

        for (const rowOffset of offsets) {
            for (const colOffset of offsets) {
                if (rowOffset === 0 && colOffset === 0) {
                    continue
                }

                const newRow = row + rowOffset
                const newCol = col + colOffset
                if (this.inBounds(newRow, newCol)) {
                    yield { row: newRow, col: newCol }
                }
            }
        }
    }

    public indexToCoordinate(index: number): Coordinate {
        return {
            row: Math.floor(index / this.cols),
            col: index % this.cols,
        }
    }
}
