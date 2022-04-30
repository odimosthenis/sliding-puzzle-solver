let rnd = ()=>Math.floor(Math.random() * 3)-1 ;

// get the completed array

let puzzle = {
    grid: getSolvedGrid(3),
};
puzzle.zero = findZero(puzzle.grid);
puzzle = randomize(puzzle,100);

puzzle.zero = findZero(puzzle.grid);
puzzle.code = getpuzzlecode(puzzle);
puzzle.eval = evaluate(puzzle);
puzzle.path = '';
puzzle.gen=0;

printGrid(puzzle.grid);
let solution = solve(puzzle);
console.log(solution)




// render the array

// moves 
    // change the array
    // render the array

// a i solve the latest array