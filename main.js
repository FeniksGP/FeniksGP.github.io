import { Board } from './src/class/Board.js';

const myBoard = new Board('board');

const targetSquare = myBoard.squares[0][0];
targetSquare.element.innerHTML = `<img src="src/class/img/wr.png" style="width: 80%; height: 80%; object-fit: contain;">`;
const targetSquare = myBoard.squares[1][0];
targetSquare.element.innerHTML = `<img src="src/class/img/wq.png" style="width: 80%; height: 80%; object-fit: contain;">`;