
const gridContainer = document.querySelector('div.gridContainer');

for(let i= 0; i<16;i++){
const divGridItem =document.createElement('div');
divGridItem.setAttribute('class','gridItem');
gridContainer.appendChild(divGridItem);
}

