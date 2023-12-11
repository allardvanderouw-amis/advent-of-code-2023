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
  let input = input1

  input = input.replaceAll('.', 0)
  input = input.replaceAll('#', 1)

  const lines = input.trim().split('\n')
  const grid = input.trim().split('\n').map((line) => line.split('').map(Number))
  console.log(grid)

  // Add columns
  for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex += 1) {
    let allSpace = true

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
      if (grid[rowIndex][columnIndex] !== 0) {
        allSpace = false
      }
    }

    if (allSpace) {
      for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
        grid[rowIndex].splice(columnIndex, 0, 0)
      }
      columnIndex += 1
    }
  }

  // Add rows
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
    const allSpace = grid[rowIndex].every(gridItem => gridItem === 0)
    if (allSpace) {
      grid.splice(rowIndex, 0, grid[rowIndex])
      rowIndex += 1
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
  easystar.setAcceptableTiles([0, 1])

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
      sum += path.length - 1
    }
  }

  console.log(sum)
}
run()