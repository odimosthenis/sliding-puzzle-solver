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
printGrid(puzzle.grid)


function getChildren(puzzle){
    const children = [];
    [
        { moveY:-1, moveX:0 },
        { moveY:1, moveX:0 },
        { moveY:0, moveX:-1 },
        { moveY:0, moveX:1 },
        
    ].forEach((dir)=>{
        const mov =  moveNewPuzzle(puzzle, dir.moveY, dir.moveX);
        if(mov)children.push(mov)
    })
    return children;
}

function moveNewPuzzle(puzzle,moveY, moveX){
    let index=-1;
    try{
        index = puzzle.grid[puzzle.zero.y+moveY][puzzle.zero.x+moveX];
    } catch (e) {
        console.log('Our of index')
    }
    
    if (index!=-1){
        const newpuzzle = copyPuzzle(puzzle);
        newpuzzle.grid[newpuzzle.zero.y][newpuzzle.zero.x]=newpuzzle.grid[newpuzzle.zero.y+moveY][newpuzzle.zero.x+moveX]
        newpuzzle.grid[newpuzzle.zero.y+moveY][newpuzzle.zero.x+moveX] = 0;
        newpuzzle.zero.x += moveX;
        newpuzzle.zero.y += moveY;
        return newpuzzle;
    }else{
        return null;
    }
};

function compPuzzle(size){
    const newpuzz = {}
    const grid = [];
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            if (grid[i]==undefined){
                grid[i] = [];
            }
            grid[i][j] = j+i*size
        }
    }
    newpuzz.grid = grid;
    newpuzz.zero= {x:0,y:0};
    newpuzz.eval = 0
    return newpuzz;
};

function printGrid(grid){
    let str = ''
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid.length;j++){
            str+=" "+grid[i][j]
        }
        str+='\n'
    }
    console.log(str)
};

function move(puzzle,moveY, moveX){

    let index=-1;
    try{
        index = puzzle.grid[puzzle.zero.y+moveY][puzzle.zero.x+moveX];
    } catch (e) {
        console.log('Our of index')
    }
    
    if (index!=-1){
        puzzle.grid[puzzle.zero.y][puzzle.zero.x]=puzzle.grid[puzzle.zero.y+moveY][puzzle.zero.x+moveX]
        puzzle.grid[puzzle.zero.y+moveY][puzzle.zero.x+moveX] = 0;
        puzzle.zero.x += moveX;
        puzzle.zero.y += moveY;
    }
};

function copyPuzzle(model){
    const newpuzzle = compPuzzle(3);

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            newpuzzle.grid[i][j] = model.grid[i][j];
        }
    }
    newpuzzle.zero.x = model.zero.x;
    newpuzzle.zero.y = model.zero.y;
    return newpuzzle;
}
