const SIZE=3

let puzzle = randomPuzzle(200);
const original = copyPuzzle(puzzle)
printGrid(original.grid)

let solution = solveIt(puzzle);
console.log(solution)

window.onload = ()=>{
    renderPuzzle(original)
}





// render the array

// moves 
    // change the array
    // render the array


function solveIt(puzzle){
    puzzle.zero = findZero(puzzle.grid);
    puzzle.code = getpuzzlecode(puzzle);
    puzzle.eval = evaluate(puzzle);
    puzzle.path = '';
    puzzle.gen=0;

    return solve(puzzle)
}