function copyPuzzle(puzzle){
    const newpuzzle=[];

    newpuzzle.grid = copyGrid(puzzle.grid);
    newpuzzle.zero = {x:puzzle.zero.x, y:puzzle.zero.y}

    return newpuzzle;
}

function move(puzzle,moveY, moveX){
    if (Math.abs(moveX)+Math.abs(moveY)>1) return null;
    try{
        index = puzzle.grid[puzzle.zero.y+moveY][puzzle.zero.x+moveX];
    } catch (e) {
        // console.log('Our of index')
        return null
    };

    if(puzzle.zero.x+moveX>=3) return null;
    if(puzzle.zero.x+moveX<0) return null;

    const newpuzzle = copyPuzzle(puzzle);

    swap(newpuzzle.grid,puzzle.zero.y,puzzle.zero.x,puzzle.zero.y+moveY,puzzle.zero.x+moveX);
    newpuzzle.zero.x += moveX;
    newpuzzle.zero.y += moveY;
    return newpuzzle;
}

function randomize(puzzle,MOVES){
    let newpuzzle = copyPuzzle(puzzle);
    for (let n=0;n<MOVES;n++){
        let x=rnd();
        let y = rnd();
        const newnewpuzzle = move(newpuzzle,y,x)
        if(newnewpuzzle!=null) newpuzzle=newnewpuzzle;
    };
    return newpuzzle;
}