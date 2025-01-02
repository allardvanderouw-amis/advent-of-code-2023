const fs = require('fs')

const getLineValue = (lines, lineIndex) => {
  let value = 0
  const line = lines[lineIndex]
  return value
}

const run = () => {
  const input = fs.readFileSync(`${__dirname}/input1.txt`, 'utf8')
  const lines = input.trim().split('\n')

  // Create grid
  const rows = []
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const row = lines[lineIndex].split('')
    rows.push(row)
  }

  let sum = 0

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < rows[rowIndex].length; columnIndex += 1) {
      const cell = rows[rowIndex][columnIndex]

      if (cell === 'X') {
        // Check if right cells contain M, A, S
        const rightCells = rows[rowIndex].slice(columnIndex + 1, columnIndex + 4)
        const rightCellsString = rightCells.join('')
        if (rightCellsString === 'MAS') {
          console.dir({ rowIndex, columnIndex, cell, rightCellsString })
          sum += 1
        }

        // Check if diagonal cells right/bottom contain M, A, S
        const diagonalRightBottomCells = []
        for (let i = 1; i < 4; i += 1) {
          const diagonalRightBottomCell = rows[rowIndex + i] && rows[rowIndex + i][columnIndex + i]
          if (diagonalRightBottomCell) {
            diagonalRightBottomCells.push(diagonalRightBottomCell)
          }
        }
        const diagonalRightBottomCellsString = diagonalRightBottomCells.join('')
        if (diagonalRightBottomCellsString === 'MAS') {
          console.dir({ rowIndex, columnIndex, cell, diagonalRightBottomCellsString })
          sum += 1
        }

        // Check if bottom cells contain M, A, S
        const bottomCells = rows.slice(rowIndex + 1, rowIndex + 4).map((row) => row[columnIndex])
        const bottomCellsString = bottomCells.join('')
        if (bottomCellsString === 'MAS') {
          console.dir({ rowIndex, columnIndex, cell, bottomCellsString })
          sum += 1
        }

        // Check if diagonal cells left/bottom contain M, A, S
        const diagonalLeftBottomCells = []
        for (let i = 1; i < 4; i += 1) {
          const diagonalLeftBottomCell = rows[rowIndex + i] && rows[rowIndex + i][columnIndex - i]
          if (diagonalLeftBottomCell) {
            diagonalLeftBottomCells.push(diagonalLeftBottomCell)
          }
        }
        const diagonalLeftBottomCellsString = diagonalLeftBottomCells.join('')
        if (diagonalLeftBottomCellsString === 'MAS') {
          console.dir({ rowIndex, columnIndex, cell, diagonalLeftBottomCellsString })
          sum += 1
        }

        // Check if left cells contain M, A, S
        const leftCells = rows[rowIndex].slice(columnIndex - 3, columnIndex).reverse()
        const leftCellsString = leftCells.join('')
        if (leftCellsString === 'MAS') {
          console.dir({ rowIndex, columnIndex, cell, leftCellsString })
          sum += 1
        }

        // Check if diagonal cells left/top contain M, A, S
        const diagonalLeftTopCells = []
        for (let i = 1; i < 4; i += 1) {
          const diagonalLeftTopCell = rows[rowIndex - i] && rows[rowIndex - i][columnIndex - i]
          if (diagonalLeftTopCell) {
            diagonalLeftTopCells.push(diagonalLeftTopCell)
          }
        }
        const diagonalLeftTopCellsString = diagonalLeftTopCells.join('')
        if (diagonalLeftTopCellsString === 'MAS') {
          console.dir({ rowIndex, columnIndex, cell, diagonalLeftTopCellsString })
          sum += 1
        }

        // Check if top cells contain M, A, S
        const topCells = rows.slice(rowIndex - 3, rowIndex).map((row) => row[columnIndex]).reverse()
        const topCellsString = topCells.join('')
        if (topCellsString === 'MAS') {
          console.dir({ rowIndex, columnIndex, cell, topCellsString })
          sum += 1
        }

        // Check if diagonal cells right/top contain M, A, S
        const diagonalRightTopCells = []
        for (let i = 1; i < 4; i += 1) {
          const diagonalRightTopCell = rows[rowIndex - i] && rows[rowIndex - i][columnIndex + i]
          if (diagonalRightTopCell) {
            diagonalRightTopCells.push(diagonalRightTopCell)
          }
        }
        const diagonalRightTopCellsString = diagonalRightTopCells.join('')
        if (diagonalRightTopCellsString === 'MAS') {
          console.dir({ rowIndex, columnIndex, cell, diagonalRightTopCellsString })
          sum += 1
        }
      }

      console.dir({ rowIndex, columnIndex, cell })
    }
  }

  console.log(sum)
}
run()