import Game from "./Game.js"
import Gameview from "./Gameview.js"

let game = new Game();
let gameview =new Gameview();
let tiles = document.querySelectorAll(".board-tile");
console.log(tiles);
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        onTileClick(tile.dataset.index);
        
    })
})


function onTileClick(i){
    game.makeMove(i);
    gameview.updateBoard(game);
    
}

document.querySelector(".restart").addEventListener("click", ()=>{
    onRestartClick();
})

function onRestartClick(){
    game= new Game();
    gameview.updateBoard(game);
}

gameview.updateBoard(game);