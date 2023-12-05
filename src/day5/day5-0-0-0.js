// Seeds
const seedRanges = [79, 14, 55, 13];

// Seed-to-soil map
const seedToSoilMap = [
    [50, 98, 2],
    [52, 50, 48],
]

// Soil-to-fertilizer map
const soilToFertilizerMap = [
    [0, 15, 37],
    [37, 52, 2],
    [39, 0, 15],
]

// Fertilizer-to-water map
const fertilizerToWaterMap = [
    [49, 53, 8],
    [0, 11, 42],
    [42, 0, 7],
    [57, 7, 4],
]

// Water-to-light map
const waterToLightMap = [
    [88, 18, 7],
    [18, 25, 70],
]

// Light-to-temperature map
const lightToTemperatureMap = [
    [45, 77, 23],
    [81, 45, 19],
    [68, 64, 13],
]

// Temperature-to-humidity map
const temperatureToHumidityMap = [
    [0, 69, 1],
    [1, 0, 69],
]

// Humidity-to-location map
const humidityToLocationMap = [
    [60, 56, 37],
    [56, 93, 4],
]

const getMapValue = (map, value, type) => {
  const range = map.find(r => {
    const [destination, source, rangeLength] = r
    if (value >= destination && value < destination + rangeLength) {
      return true
    }
    return false
  })

  // console.log({range})
  if (range) {
    addedValue = range[1] - range[0]
    console.log({ range, value, addedValue, type })
    return value + addedValue
  }
  // console.log({ range, value, type })
  return value
}

const run = () => {
  let location = 0

  // Using Array.reduce() to create pairs
  const seedPairs = seedRanges.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
        // Create pairs [array[index], array[index + 1]]
        result.push([value, array[index + 1]]);
    }
    return result;
  }, []);

  while (true) {
    const humidity = getMapValue(humidityToLocationMap, location, 'humidity')
    if (!humidity) {
      location += 1
      continue
      // break
    }
    console.log({ humidity })

    const temperature = getMapValue(temperatureToHumidityMap, humidity, 'temperature')
    if (!temperature) {
      location += 1
      continue
      // break
    }
    console.log({ temperature })

    const light = getMapValue(lightToTemperatureMap, temperature, 'light')
    if (!light) {
      location += 1
      continue
      // break
    }
    console.log({ light })

    const water = getMapValue(waterToLightMap, light, 'water')
    if (!water) {
      location += 1
      continue
      // break
    }
    console.log({ water })

    const fertilizer = getMapValue(fertilizerToWaterMap, water, 'fertilizer')
    if (!fertilizer) {
      location += 1
      continue
      // break
    }
    console.log({ fertilizer })

    const soil = getMapValue(soilToFertilizerMap, fertilizer, 'soil')
    if (!soil) {
      location += 1
      continue
      // break
    }
    console.log({ soil })

    const seed = getMapValue(seedToSoilMap, soil, 'seed')
    if (!seed) {
      location += 1
      continue
      // break
    }
    console.log({ seed })

    const seedPair = seedPairs.find((pair) => {
      if (seed >= pair[0] && seed < pair[0] + pair[1]) {
        return true
      }
      return false
    })
    if (!seedPair) {
      location += 1
      continue
      // break
    }

    break
  }

  console.log(location)
}
run()