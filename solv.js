const puzzle =
{
    grid: [
        [6,4,7],
        [8,5,0],
        [3,2,1]
        ],
    zero: {x:1,y:1}, // must always points to zero
    eval: 0,
    code: ''
}

let unsolvable = [
    [0,1,2],
    [3,4,8],
    [6,7,5]
    ]

function puzzlecode(puzzle){
    let str = '';
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            str += puzzle.grid[i][j];
        }
    };
    return str;
}

function findZero(puzzle){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if (puzzle.grid[i][j]==0){
                puzzle.zero = {x:j,y:i};
                return true;
            }
        }
    }
    return false;
}

function compareF(a,b){
    if(a.eval > b.eval) return -1;
    else if (a.eval < b.eval) return 1;
    else return 0
}


function evaluate1(puzzle){
    let sum=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(puzzle.grid[i][j]!=0){
                const shouldX = puzzle.grid[i][j]%3;
                const shouldY = Math.floor(puzzle.grid[i][j]/3)
                const distance = Math.abs(shouldX-j) + Math.abs(shouldY-i)
                sum+=distance;
            }
        }
    }
    
    return sum; 

}

function evaluate2(puzzle){
    let sum=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(puzzle.grid[i][j]!=0){
                if (puzzle.grid[i][j]!=i*3+j) sum++;
            }
        }
    }
    return sum; 
}

function search(startPuzzle){
    let count=0;
    const open =[startPuzzle];
    const closed = [startPuzzle.code];
    while(open.length>0 && count<363000){
        count++;
        const now = open.pop();
        //console.log(now.grid)
        if (now.code == '012345678'){
            console.log('Solution! :');
            printGrid(now.grid)
            console.log(open)
            console.log(closed)
            console.log(count)
            return now;
        };
        const children = getChildren(now);
        children.forEach((child)=>{
            if (!listContains(closed,child)){
                child.eval = evaluate1(child)
                open.push(child);
                open.sort(compareF);
                closed.push(child.code)

            } 
        })

    };
    console.log(open)
    console.log(closed)
}

console.log(new Date())
findZero(puzzle)
puzzle.eval = evaluate1(puzzle)
puzzle.code = puzzlecode(puzzle)
search(puzzle)
console.log(new Date())


function getChildren(puzzle){
    const children = [];
    [
        { moveY:-1, moveX:0 },
        { moveY:1, moveX:0 },
        { moveY:0, moveX:-1 },
        { moveY:0, moveX:1 },
        
    ].forEach((dir)=>{
        const mov =  moveNewPuzzle(puzzle, dir.moveY, dir.moveX);
        if(mov!=null)children.push(mov)
    })
    return children;
}

function moveNewPuzzle(puzzle,moveY, moveX){
    try{
        index = puzzle.grid[puzzle.zero.y+moveY][puzzle.zero.x+moveX];
    } catch (e) {
        // console.log('Our of index')
        return null
    };

    if(puzzle.zero.x+moveX>=3) return null;
    if(puzzle.zero.x+moveX<0) return null;

    
    const newpuzzle = copyPuzzle(puzzle);
    newpuzzle.grid[newpuzzle.zero.y][newpuzzle.zero.x]=newpuzzle.grid[newpuzzle.zero.y+moveY][newpuzzle.zero.x+moveX]
    newpuzzle.grid[newpuzzle.zero.y+moveY][newpuzzle.zero.x+moveX] = 0;
    newpuzzle.zero.x += moveX;
    newpuzzle.zero.y += moveY;
    newpuzzle.gen = puzzle.gen+1;
    newpuzzle.code = puzzlecode(newpuzzle)
    return newpuzzle;

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
        console.log(moveY, moveX)

        puzzle.grid[puzzle.zero.y][puzzle.zero.x]=puzzle.grid[puzzle.zero.y+moveY][puzzle.zero.x+moveX]
        puzzle.grid[puzzle.zero.y+moveY][puzzle.zero.x+moveX] = 0;
        puzzle.zero.x += moveX;
        puzzle.zero.y += moveY;
    }
};

function copyPuzzle(model){
    const newpuzzle = {};
    newpuzzle.grid=[
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ];

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            newpuzzle.grid[i][j] = model.grid[i][j];
        }
    }
    newpuzzle.zero = {
        x: model.zero.x,
        y: model.zero.y
    };
 
    return newpuzzle;
}

function solved(puzzle){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if (puzzle.grid[i][j] != j+i*3){
                return false;
            }
        }
    }
    
    return true; 
}

function compare(a,b){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if (a.grid[i][j] != b.grid[i][j]){
                return false;
            }
        }
    }
    
    return true; 
}

function listContains(list, puzzle){
    for (let i=0;i<list.length;i++){
        //console.log(list[i], puzzle.code)
        if (list[i] == puzzle.code) return true;
    };
    return false;
}

