function renderPuzzle(puzzle){
    const container = document.querySelector('#container');
    container.innerHTML = '';

    for (let i=0;i<puzzle.grid.length;i++){
        for (let j=0;j<puzzle.grid.length;j++){
            if(puzzle.grid[i][j]!=0){
                const square = document.createElement('div');
                square.classList.add('piece');
                square.width = square.height = '100px';
                square.innerHTML = puzzle.grid[i][j];
                square.style.top = i*100+ `px`;
                square.style.left = j*100+`px`;
                const val = puzzle.grid[i][j];
                square.dataset.val = val;
                let pos = -(val%3)*100+"px" + " "+-Math.floor(val/3)*100 +"px";
                square.style.backgroundPosition = pos;
                container.append(square);

                square.addEventListener('click', ()=>{
                    moveEvent(square,puzzle,i,j)
                })

                function moveEvent(square,puzzle,i,j){
                    UImove(square,puzzle,i,j)
                }

            }
        }
    };
    container.dataset.puzzle = puzzle.grid;
};

function UImove(square,puzzle,y,x){

    let dx = x - puzzle.zero.x;
    let dy = y - puzzle.zero.y;
    if (Math.abs(dx)>1 || Math.abs(dx)>1 || (Math.abs(dx)+Math.abs(dy)>=2) ) return false;

    const mov = move(puzzle,dy,dx);
    if(mov!=null) {
        const dir = addToPath(dy, dx);
        square.classList.add(dir)
        puzzle = mov;
    };

    setTimeout(()=>{
        const dir = addToPath(dy, dx);
        square.classList.remove(dir)
        renderPuzzle(puzzle);
    },100);
}