const EasyStar = require('easystarjs')

const input1 = `
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....
`

const input2 = `
.....................................................................................#......#...............................................
..#.....#.................................................................#........................#........................................
...............................#...............................................................................#.....#......................
.................................................#.............#...............................#...................................#........
..............#......#.................#...............#............#.............#..........................................#..............
.........................................................................................#.................#...............................#
.#..........................................................................................................................................
..........................#......#............................................#......#.................................#....................
.................................................................................................#..........................................
.........................................#..........#..........#............................................................#...............
......#.....#......#..........................#........................#....................................................................
....................................#.........................................................................#..........................#..
..................................................................................#.........................................................
...................................................................................................................#........................
.................................................................#........................................#.................................
.............................#..............................#..........................#.......#............................................
..........................................#.....#.............................#.............................................................
#..................#..................................................................................................................#.....
....................................#...................#..........................#...........................#..............#.............
........#................#...................#.............................................................................................#
...............................#....................#...........................................#...........................................
.......................................#..............................................#.....................................................
........................................................................#........#...........................#..............................
..................................#........#...................#........................................#.........#.................#.......
#................#........................................................................................................#.................
.........#.......................................#...............................................#.............................#........#...
...............................................................................................................#............................
.........................................................................................#..................................................
...........................................................#..................................#..........#...........................#......
......#.........................#..........................................................................................#................
....................#.....................#.......#...............................#.................................#.......................
..........................#..............................................#..................................................................
..........#..........................#.......................#...................................#..............#..............#...........#
......................................................#.....................................................................................
............................................................................................................................................
#...............................................#................#............................#.............................................
..................#......................#............................#................................#................................#...
............................................................................................................................................
....................................................#....................................#.............................#....................
..............#...................#................................#..........#..............................#.............................#
............................#...............................................................................................#...............
....#.................#.....................................#..........#............................................................#.......
......................................................#.....................................................................................
...........#..............................#.................................................#..........#.................#..................
.................................#..............#................#..........#.......#.......................................................
...................................................................................................................#..............#.........
#...........................................................................................................#...............................
........#.......#............................................................................................................#..............
............................#.....................#..........#......................................#.....................................#.
.....................................#.................................................#........................#...........................
.........................................................................................................................#...........#......
.......................#.............................#........................#.............................................................
..............#...............................#.................#..................#........#...............................................
...#......................................................................#.................................#..............................#
...................#..................#.............................................................................#........#..............
............................................................................................................................................
.........................#.........................#........................................................................................
......#......#.............................................#.............................#............#.....................................
.................................#......................................#...................................................................
.........................................#........................#..............................#.................#..............#.........
............................................................................................................................................
......................................................#.................................................#..............#..................#.
......................#......#...............#...................................#............................#.............................
....#...........#.................#............................................................#...............................#............
..........................................................................#..........................#......................................
..........................................#................................................#...............................#............#...
................................................................................................................#...........................
..........#....................................#...................................................................................#........
................................#....................#..............................................................#.......................
......#.......................................................#...............................#.............................................
#.......................#.....................................................................................................#.............
.................#...................#...........................................#..........................#...............................
.....................................................................#....................#.................................................
..............................#.................#.......#.........................................#.........................................
..#........................................................................#....................................#.........#.................
...........#............................#..........................................#.............................................#..........
......#.............................................................................................................#.....................#.
........................................................................................................#...................................
..............#...................#.........#...............................................................................................
........................................................#.............#..........#.....#..........#............................#............
.........#......................................................#...........................#...............................................
.........................................#...................................#.................................#............................
............................................................................................................................................
................#...................................................................#.................#..................#..................
.................................#..........................#.............#....................#................................#..........#
...#........................#.........................................................................................................#.....
.................................................#......................................#.....................#......#......................
...........................................#.........................#........#.............................................................
........#......#...................................................................................................................#.....#..
.#..................#..................................#.........#..........................................................................
..................................#.....#.................................#.................................................................
...................................................#.................................#......................................................
............................................................#...............................................................................
.............................................#......................#..........#............#.........................#......#..............
................................#...................................................................#.......................................
.....................................................#..................#......................................#............................
...#......................#.....................................................................................................#...........
...........#...........................................................................#..............................................#.....
................#..................................................#..............................................#.........................
.......................#......................................................................#.............................................
................................#........#.........#.....................#.....#......................#.....................................
.#..........................................................................................................................................
........................................................#................................#...................#..................#...........
.....................................#........#.................................................#.......................................#...
.........#...........#......................................................................................................................
....................................................#.............................................................#.................#.......
.............#............#........................................#.............#.....................#...................#...............#
..................#....................#.................................#.............#....................................................
................................................#...........................................................................................
.......................#...............................................................................................#....................
....#..........................................................#.....#..............#...........................................#...........
...............................................................................................#..................#.......................#.
.........#...................#............................................#.................................................................
.............................................................................................................#..............#......#........
...........................................................................................#................................................
.#...........................................................#..............................................................................
..............#..............................#........................................#.............#.......................................
....................................#..............#..............#.........#.............................#.............#.............#.....
....................#............................................................................................#..........................
.........................................................................................#..................................................
...........#............................#................#....................................................................#.............
.....#......................................................................................................#...............................
..................................#................................................#........#.............................................#.
.#................#......#...........................................................................#......................................
..............................................#.......................#................#............................................#.......
.........#............................#........................#..........................................#.....#......#....................
..............................................................................................#.............................................
........................................................................................................................................#...
..........................#........................#...............#................................#............................#..........
..#........................................#............#............................................................#......................
...............................#.....#........................................#.......#......................................#..............
.......................................................................................................#....................................
.....................................................#..............................................................................#.......
........#......................................#...........................#.............................................#.................#
...................#.....#......................................#.............................#.............................................
............#.........................#......................................................................#.......#.................#....
..............................#...................................................#.........................................................
............................................#.........................................................#.....................................
.......#..........................#................#.....#.............#....................................................................
..................#.........................................................#.............#.......................................#.........
`

const run = () => {
  let input = input2

  input = input.replaceAll('.', 0)
  input = input.replaceAll('#', 1)

  const lines = input.trim().split('\n')
  const grid = input.trim().split('\n').map((line) => line.split('').map(Number))
  console.log(grid)

  // Update columns
  for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex += 1) {
    let allSpace = true

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
      if (grid[rowIndex][columnIndex] !== 0) {
        allSpace = false
      }
    }

    if (allSpace) {
      for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
        grid[rowIndex][columnIndex] = 2
      }
    }
  }

  // Update rows
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
    const allSpace = grid[rowIndex].every(gridItem => gridItem === 0 || gridItem === 2)
    if (allSpace) {
      for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex += 1) {
        grid[rowIndex][columnIndex] = 2
      }
    }
  }

  const gridStr = grid.map((gridLine) => gridLine.join('')).join('\n')
  console.log(gridStr)

  // Get galaxies
  const galaxies = []
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex += 1) {
      if (grid[rowIndex][columnIndex] === 1) {
        galaxies.push({
          key: `${rowIndex}-${columnIndex}`,
          row: rowIndex,
          column: columnIndex
        })
      }
    }
  }

  // Get galaxy links
  const galaxyLinksMap = new Map()
  for (const mainGalaxy of galaxies) {
    for (const linkedGalaxy of galaxies) {
      if (mainGalaxy.key === linkedGalaxy.key) {
        continue
      }
      if (galaxyLinksMap.has(`${mainGalaxy.key}#${linkedGalaxy.key}`) || galaxyLinksMap.has(`${linkedGalaxy.key}#${mainGalaxy.key}`)) {
        continue
      }
      galaxyLinksMap.set(`${mainGalaxy.key}#${linkedGalaxy.key}`, {
        key: `${mainGalaxy.key}#${linkedGalaxy.key}`,
        a: mainGalaxy,
        b: linkedGalaxy
      })
    }
  }
  const galaxyLinks = [...galaxyLinksMap.values()]
  console.log(galaxyLinks)
  console.log(galaxyLinks.length)

  var easystar = new EasyStar.js()
  easystar.enableSync()
  easystar.setGrid(grid)
  easystar.setAcceptableTiles([0, 1, 2])
  easystar.setTileCost(2, 2)

  let sum = 0
  for (const [galaxyLinkIndex, galaxyLink] of galaxyLinks.entries()) {
    console.log(`Processing ${galaxyLinkIndex + 1} of ${galaxyLinks.length}`)

    let path = null
    easystar.findPath(galaxyLink.a.column, galaxyLink.a.row, galaxyLink.b.column, galaxyLink.b.row, (p) => {
      path = p
    })
    easystar.calculate()

    if (!path || path.length === 0) {
      throw new Error(`Could not find path between ${galaxyLink.a.key} and ${galaxyLink.b.key}`)
    } else {
      for (const tile of path) {
        if (grid[tile.y][tile.x] === 2) {
          sum += 1000000
        } else {
          sum += 1
        }
      }
      sum -= 1
    }
  }

  console.log(sum)
}
run()