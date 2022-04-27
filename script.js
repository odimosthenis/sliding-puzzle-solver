window.onload = ()=>{
    const container = document.querySelector('#container');
    const size = 3;// could be 2,3,4,5,6
    const containerSize = 600;
    const blockSize =  containerSize/size
    let puzzle = []

    for (let i=0;i<size*size;i++){

        puzzle.push({
            value: i,
            position: i,
            x: getCol(i,size) * blockSize  ,
            y: getRow(i,size) * blockSize
        })
    }

    const rand = getRandomVals(size);
    for(let i=0;i<size*size;i++){
        puzzle[i].value = rand[i];
    }

    renderPuzzlie(puzzle, container, blockSize, size)

}

function renderPuzzlie(puzzle, container,blockSize,size){
    for (let item of puzzle){
        if (item.value==0) continue;
        const block = document.createElement('div')
        block.style.width = block.style.height = blockSize-2+'px';
        block.style.top = `${item.y}px`;
        block.style.left = `${item.x}px`;

        block.innerHTML = `<b> ${item.value} </b>`
        block.classList.add('piece')
        block.addEventListener('click', ()=>{
            move(puzzle,item,size)
        })
        container.append(block)
    }
}

let getRow=(i,size)=> Math.floor(i/size);
let getCol = (i,size)=> i%size;
let cordsToI = (row,col,size) => (row*size + col)


function getRandomVals(size){
    const values=[];
    for (let i=0;i<size*size;i++){
        values.push(i)
    }
    const randomVals = values.sort(()=> Math.random()-0.5);
    return randomVals;
}




function move(puzzle,item,size){
    console.log(this)

    let nowRow = getRow(item.position, size)
    let nowCol = getCol(item.position, size)

    let leftCol = (nowCol<=0) ? -1 : nowCol-1;
    let rightCol = (nowCol>=size-1) ? -1 : nowCol+1;

    let upRow = (nowRow<=0) ? -1 : nowRow - 1;
    let downRow = (nowRow>=size-1) ? -1 : nowRow + 1;

    console.log(leftCol, rightCol, downRow, upRow)
    if ( leftCol!=-1 && puzzle[cordsToI(nowRow,leftCol,size)].value == 0){
    }
    else if ( rightCol!=-1 && puzzle[cordsToI(nowRow,rightCol,size)].value == 0){
    }
    else if ( downRow!=-1 && puzzle[cordsToI(downRow,nowCol,size)].value == 0){
    }
    else if ( upRow!=-1 && puzzle[cordsToI(upRow,nowCol,size)].value == 0){
    }

    
}