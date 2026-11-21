import { Board } from './src/class/Board.js';

let myBoard = new Board('board');

let whitePawn = new Pawn(0, 6, 'white', 'src/class/img/wp.png');


let targetSquare = myBoard.squares[6][0];
targetSquare.element.innerHTML = whitePawn.render();