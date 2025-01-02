// Seeds
const seeds = [79, 14, 55, 13];

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

const getMapValue = (map, value) => {
  const range = map.find(r => {
    const [destination, source, rangeLength] = r
    if (value >= source && value < source + rangeLength) {
      return true
    }
    return false
  })

  if (range) {
    addedValue = range[0] - range[1]
    return value + addedValue
  }
  return value
}

const getSeedLocationValue = (seeds, seedIndex) => {
  const seed = seeds[seedIndex]
  // console.log({ seed })

  const soil = getMapValue(seedToSoilMap, seed)
  // console.log({ soil })

  const fertilizer = getMapValue(soilToFertilizerMap, soil)
  // console.log({ fertilizer })

  const water = getMapValue(fertilizerToWaterMap, fertilizer)
  // console.log({ water })

  const light = getMapValue(waterToLightMap, water)
  // console.log({ light })

  const temperature = getMapValue(lightToTemperatureMap, light)
  // console.log({ temperature })

  const humidity = getMapValue(temperatureToHumidityMap, temperature)
  // console.log({ humidity })

  const location = getMapValue(humidityToLocationMap, humidity)
  // console.log({ location })

  return location
}

const run = () => {
  let lowestLocation = undefined

  for (let seedIndex = 0; seedIndex < seeds.length; seedIndex += 1) {
    const location = getSeedLocationValue(seeds, seedIndex)
    if (lowestLocation === undefined) {
      lowestLocation = location
    }
    if (location < lowestLocation) {
      lowestLocation = location
    }
  }

  console.log(lowestLocation)
}
run()