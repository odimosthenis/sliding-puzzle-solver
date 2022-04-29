let nowPuzzle=[];
const size=3;
const containerSize = 300;
const blockSize =  containerSize/size;

window.onload = ()=>{
    const container = document.querySelector('#container');

    for (let i=0;i<size*size;i++){

        nowPuzzle.push({
            value: i,
            position: i,
            imageI: i,
            x: getCol(i,size) * blockSize  ,
            y: getRow(i,size) * blockSize
        })
    }

    const rand = getRandomVals(size);
    for(let i=0;i<size*size;i++){
        nowPuzzle[i].value = rand[i];
    }

    renderPuzzlie(container)

}

function renderPuzzlie(container){
    for (let item of nowPuzzle){
        // if (item.value==0) continue;
        const block = document.createElement('div')
        block.style.width = block.style.height = blockSize-2+'px';
        block.style.top = `${item.y}px`;
        block.style.left = `${item.x}px`;
        let pos = getCol(item.value,size)*100+"px" + " "+getRow(item.value,size)*100 +"px"
        block.style.backgroundPosition = pos;
        if(item.value!=0) {
            block.classList.add('piece');
        }
        block.addEventListener('click', ()=>{
            move(item,block, container)
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




function move(item,block,container){
    const smooth = 100
    console.log(nowPuzzle)

    let nowRow = getRow(item.position, size)
    let nowCol = getCol(item.position, size)

    let leftCol = (nowCol<=0) ? -1 : nowCol-1;
    let rightCol = (nowCol>=size-1) ? -1 : nowCol+1;

    let upRow = (nowRow<=0) ? -1 : nowRow - 1;
    let downRow = (nowRow>=size-1) ? -1 : nowRow + 1;

    console.log(leftCol, rightCol, downRow, upRow)
    if ( leftCol!=-1 && nowPuzzle[cordsToI(nowRow,leftCol,size)].value == 0){
        block.classList.add('moveLeft');
        setTimeout(()=>{
            nowPuzzle[cordsToI(nowRow,leftCol,size)].value = 
            nowPuzzle[cordsToI(nowRow,nowCol,size)].value;
            nowPuzzle[cordsToI(nowRow,nowCol,size)].value = 0;
            container.innerHTML = '';
            renderPuzzlie(container)
        },smooth)
    }
    else if ( rightCol!=-1 && nowPuzzle[cordsToI(nowRow,rightCol,size)].value == 0){
        block.classList.add('moveRight');
        setTimeout(()=>{
            nowPuzzle[cordsToI(nowRow,rightCol,size)].value = 
            nowPuzzle[cordsToI(nowRow,nowCol,size)].value;
            nowPuzzle[cordsToI(nowRow,nowCol,size)].value = 0;
            container.innerHTML = '';
            renderPuzzlie(container)
        },smooth)
    }
    else if ( downRow!=-1 && nowPuzzle[cordsToI(downRow,nowCol,size)].value == 0){
        block.classList.add('moveDown');
        setTimeout(()=>{
            nowPuzzle[cordsToI(downRow,nowCol,size)].value = 
            nowPuzzle[cordsToI(nowRow,nowCol,size)].value;
            nowPuzzle[cordsToI(nowRow,nowCol,size)].value = 0;
            container.innerHTML = '';
            renderPuzzlie(container)
        },smooth)
    }
    else if ( upRow!=-1 && nowPuzzle[cordsToI(upRow,nowCol,size)].value == 0){
        block.classList.add('moveUp');
        setTimeout(()=>{
            nowPuzzle[cordsToI(upRow,nowCol,size)].value = 
            nowPuzzle[cordsToI(nowRow,nowCol,size)].value;
            nowPuzzle[cordsToI(nowRow,nowCol,size)].value = 0;
            container.innerHTML = '';
            renderPuzzlie(container)
        },smooth)
    }

    
}