

const gridBtn = document.querySelector('#btnGridSize');
const content=document.querySelector('div.content');
const gridContainer= document.createElement('div')
gridContainer.setAttribute('class', 'gridContainer');


function poplateGrid(rows,cols){
gridContainer.setAttribute('style', 'grid-template-columns: repeat('+cols+', 1fr);grid-template-rows: repeat('+rows+',1fr)');

for(let i= 0; (i< rows * cols);i++){
    const divGridItem =document.createElement('div');
    divGridItem.setAttribute('class','gridItem');
    
    content.appendChild(gridContainer);
    gridContainer.appendChild(divGridItem);
    }
}

let paintCells = () => gridItems.forEach(e => e.addEventListener('mouseover', (e)=>{
    e.target.style.backgroundColor = "red";
}
));


function newGrid(){
    let newNum = prompt("Please enter a number between 4-100 for new grid",);
    
    if (!newNum){
        return;
    }else{
        
    while ((newNum < 4) || (newNum >100) || (!Number.isInteger(parseInt(newNum))) ){
        newNum = prompt("Please enter number between 4-100 for new grid",);
    }}

    

    rows = parseInt(newNum);
    cols = parseInt(newNum);

        while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

poplateGrid(rows,cols);
const gridItems = document.querySelectorAll('div.gridItem');
let paintCells = () => gridItems.forEach(e => e.addEventListener('mouseover', (e)=>{
    e.target.style.backgroundColor = "red";
}
));
paintCells();

}


poplateGrid(16,16);

const gridItems = document.querySelectorAll('div.gridItem');

gridBtn.addEventListener('click', newGrid);

paintCells();
