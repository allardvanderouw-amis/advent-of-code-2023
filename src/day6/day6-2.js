const input1 = `
Time:      71530
Distance:  940200
`

const input2 = `
Time:        44707080
Distance:   283113411341491
`

const getRaceCombos = (times, distances, raceIndex) => {
  const time = times[raceIndex]
  const distance = distances[raceIndex]

  let combos = 0
  for (let ms = 0; ms < time; ms += 1) {
    const remainingMs = time - ms
    const comboDistance = remainingMs * ms
    if (comboDistance > distance) {
      combos += 1
    }

    // console.log({ ms, comboDistance, combos })
  }

  // console.dir({ time, distance, combos })
  return combos
}

const run = () => {
  let sum = 1
  const lines = input2.trim().split('\n')
  const times = lines[0].split(':')[1].split(' ').filter(Boolean).map(Number)
  const distances = lines[1].split(':')[1].split(' ').filter(Boolean).map(Number)


  for (let raceIndex = 0; raceIndex < times.length; raceIndex += 1) {
    const combos = getRaceCombos(times, distances, raceIndex)
    sum = sum * combos
  }

  console.log(sum)
}
run()