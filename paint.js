function renderPuzzle(puzzle){
    const container = document.querySelector('#container');
    container.innerHTML = '';

    for (let i=0;i<puzzle.grid.length;i++){
        for (let j=0;j<puzzle.grid.length;j++){
            if(puzzle.grid[i][j]!=0){
                const square = document.createElement('div');
                square.classList.add('piece')
                square.width = square.height = '100px';
                square.innerHTML = puzzle.grid[i][j]
                square.style.top = i*100+ `px`;
                square.style.left = j*100+`px`;
                container.append(square)
            }
            
        }
    }
}