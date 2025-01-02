const fs = require('fs')

const getLineValue = (lines, lineIndex) => {
  const [left, right] = lines[lineIndex].split('   ').map(Number)
  return { left, right }
}

const run = () => {
  const input = fs.readFileSync(`${__dirname}/input0.txt`, 'utf8')

  let sum = 0
  const lines = input.trim().split('\n')

  const leftValues = []
  const rightValues = []
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const { left, right } = getLineValue(lines, lineIndex)
    leftValues.push(left)
    rightValues.push(right)
  }

  leftValues.sort((a, b) => a - b)
  rightValues.sort((a, b) => a - b)

  console.dir({ leftValues, rightValues })

  const combinations = leftValues.length
  for (let i = 0; i < combinations; i += 1) {
    const equalNumbers = rightValues.filter((right) => right === leftValues[i])
    sum = sum + (leftValues[i] * equalNumbers.length)
  }

  console.log(sum)
}
run()