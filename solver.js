function emptyPuzzle(size){
    const puzz = [];
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            if (puzz[i]==undefined){
                puzz[i] = [];
            }
        }
    }
    return puzz;
}

const puzzle =
{
    grid: [
        [2,3,5],
        [8,0,4],
        [7,1,6]
        ],
    zero: {x:1,y:1},
    eval: 0
}

function moveLeft(puzzle){
    const newPuzzle = emptyPuzzle();
    copyGrid(puzzle.grid, newPuzzle.grid);
}


function copyGrid(puzzfrom,puzzto){
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            puzzto[i][j] = puzzfrom[i][j];
        }
    }
}

function printPuzzle(puzzle){
    let str = ''
    for(let i=0;i<puzzle.length;i++){
        for(let j=0;j<puzzle.length;j++){
            str+=" "+puzzle[i][j]
        }
        str+='\n'
    }
    console.log(str)
}

printPuzzle(puzzle.grid)