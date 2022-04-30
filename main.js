let rnd = ()=>Math.floor(Math.random() * 3)-1 ;

// get the completed array

let puzzle = {
    grid: getSolvedGrid(3),
};

function randomPuzzle(puzzle){
    puzzle.zero = findZero(puzzle.grid);
    return randomize(puzzle,100);
}

puzzle = randomPuzzle(puzzle);
const original = copyPuzzle(puzzle)

function solveIt(puzzle){
    puzzle.zero = findZero(puzzle.grid);
    puzzle.code = getpuzzlecode(puzzle);
    puzzle.eval = evaluate(puzzle);
    puzzle.path = '';
    puzzle.gen=0;

    return solve(puzzle)
}

printGrid(original.grid)
let solution = solveIt(puzzle);
console.log(solution)




// render the array

// moves 
    // change the array
    // render the array

// a i solve the latest array