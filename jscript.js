
const gridContainer = document.querySelector('div.gridContainer');

let rows = 16
let cols = 16

for(let i= 0; (i< rows * cols);i++){
const divGridItem =document.createElement('div');
divGridItem.setAttribute('class','gridItem');
gridContainer.appendChild(divGridItem);
}

/*
##########To Work on next #########
create a change size button from 4-100
the event listener to remove current element replace with new variables
*/