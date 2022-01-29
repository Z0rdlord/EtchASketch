

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

poplateGrid(16,16);



/*
##########To Work on next #########
create a change size button from 4-100
the event listener to remove current element replace with new variables
*/