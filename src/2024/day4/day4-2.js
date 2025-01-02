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

      if (cell === 'A') {
        // Check if top left to bottom right diagonal cells contain M, S
        let isForwardXmas = false
        const topLeftCell = rows[rowIndex - 1] && rows[rowIndex - 1][columnIndex - 1]
        const bottomRightCell = rows[rowIndex + 1] && rows[rowIndex + 1][columnIndex + 1]
        if (topLeftCell === 'M' && bottomRightCell === 'S') {
          console.dir({ rowIndex, columnIndex, cell, topLeftCell, bottomRightCell })
          isForwardXmas = true
        }
        if (topLeftCell === 'S' && bottomRightCell === 'M') {
          console.dir({ rowIndex, columnIndex, cell, topLeftCell, bottomRightCell })
          isForwardXmas = true
        }

        // Check if top right to bottom left diagonal cells contain M, S
        let isBackwardXmas = false
        const topRightCell = rows[rowIndex - 1] && rows[rowIndex - 1][columnIndex + 1]
        const bottomLeftCell = rows[rowIndex + 1] && rows[rowIndex + 1][columnIndex - 1]
        if (topRightCell === 'M' && bottomLeftCell === 'S') {
          console.dir({ rowIndex, columnIndex, cell, topRightCell, bottomLeftCell })
          isBackwardXmas = true
        }
        if (topRightCell === 'S' && bottomLeftCell === 'M') {
          console.dir({ rowIndex, columnIndex, cell, topRightCell, bottomLeftCell })
          isBackwardXmas = true
        }

        if (isForwardXmas && isBackwardXmas) {
          sum += 1
        }
      }
    }
  }

  console.log(sum)
}
run()