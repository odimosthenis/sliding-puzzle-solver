function getChildren(puzzle){
    const children = [];
    [
        { moveY:-1, moveX:0 },
        { moveY:1, moveX:0 },
        { moveY:0, moveX:-1 },
        { moveY:0, moveX:1 },
        
    ].forEach((dir)=>{
        const child = move(puzzle,dir.y,dir.x);
        if (child!=null) children.push(child)
    });

    return children;
}