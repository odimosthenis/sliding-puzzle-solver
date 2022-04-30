let rnd = ()=>Math.floor(Math.random() * 3)-1

// get the completed array

let puzzle = {
    grid: getSolvedGrid(3),
}
puzzle.zero = findZero(puzzle.grid)

puzzle = randomize(puzzle,31)

printGrid(puzzle.grid)



// render the array

// moves 
    // change the array
    // render the array

// a i solve the latest array