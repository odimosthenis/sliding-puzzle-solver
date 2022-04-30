const SIZE=3

window.onload = ()=>{

    let puzzle = randomPuzzle(100)
    printGrid(puzzle.grid)
    renderPuzzle(puzzle)

    document.querySelector('#shuffle').addEventListener('click',()=>{
        puzzle = randomPuzzle(400)
        printGrid(puzzle.grid)
        renderPuzzle(puzzle)
    });
    document.querySelector('#solve').addEventListener('click',()=>{
        // Get the puzzle from Dom cause JS is butthurt
        const grid = fromDomToGrid();
        let puzzle = {
            grid: grid,
            path:'',
            gen:0

        }
        puzzle.zero = findZero(puzzle.grid);
        puzzle.code = getpuzzlecode(puzzle);
        puzzle.eval = evaluate(puzzle);
        const orgnl = copyPuzzle(puzzle);
        const sol = solve(puzzle)
        if(sol.path!='')renderSolution(orgnl,sol.path)
    });

}

function fromDomToGrid(){
    let grid = [];
    let gridStr = document.querySelector('#container').dataset.puzzle;
    gridStr=gridStr.replaceAll(',','');
    for (var i = 0; i < gridStr.length; i++) {
        let val = gridStr.charAt(i);
        let x = i%3;
        let y = Math.floor(i/3);
        if(grid[y]==undefined)grid[y]=[];
        grid[y][x]=val;
    };
    return grid;
}
