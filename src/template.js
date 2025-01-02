const fs = require('fs')

const getLineValue = (lines, lineIndex) => {
  let value = 0
  const line = lines[lineIndex]
  return value
}

const run = () => {
  const input = fs.readFileSync(`${__dirname}/input0.txt`, 'utf8')

  let sum = 0
  const lines = input.trim().split('\n')

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const lineValue = getLineValue(lines, lineIndex)
    sum = sum + lineValue
  }

  console.log(sum)
}
run()