const fs = require('fs')

const getLineValue = (lines, lineIndex) => {
  const line = lines[lineIndex]
  const lineValues = line.split(' ').map(Number)

  let isSafe = true
  const isIncreasing = lineValues[0] < lineValues[1]
  for (let lineValueIndex = 0; lineValueIndex < lineValues.length; lineValueIndex += 1) {
    // The levels are either all increasing or all decreasing.
    if (isIncreasing && lineValues[lineValueIndex] >= lineValues[lineValueIndex + 1]) {
      isSafe = false
      break
    }
    if (!isIncreasing && lineValues[lineValueIndex] <= lineValues[lineValueIndex + 1]) {
      isSafe = false
      break
    }

    // Any two adjacent levels differ by at least one and at most three.
    if (Math.abs(lineValues[lineValueIndex] - lineValues[lineValueIndex + 1]) > 3) {
      isSafe = false
      break
    }
  }
  console.dir({ line: lines[lineIndex], isSafe })

  return isSafe ? 1 : 0
}

const run = () => {
  const input = fs.readFileSync(`${__dirname}/input0.txt`, 'utf8')

  let sum = 0
  const lines = input.trim().split('\n')

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const lineValue = getLineValue(lines, lineIndex)
    sum = sum + lineValue

    if (lineValue === 0) {
      // Retry without each value
      const lineValues = lines[lineIndex].split(' ').map(Number)
      for (let lineValueIndex = 0; lineValueIndex < lineValues.length; lineValueIndex += 1) {
        const newLine = lineValues.filter((_, index) => index !== lineValueIndex).join(' ')
        const newLineValue = getLineValue([newLine], 0)
        if (newLineValue === 1) {
          sum = sum + newLineValue
          break
        }
      }
    }
  }

  console.log(sum)
}
run()