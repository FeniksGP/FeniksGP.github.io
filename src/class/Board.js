import { Square } from './Square.js';

export class Board {
    constructor(containerId) {
        
        this.container = document.getElementById(containerId);
        this.squares = []; 
        
        this.createBoard();
    }

    createBoard() {
        for (let row = 0; row < 8; row++) {
            this.squares[row] = [];
            for (let col = 0; col < 8; col++) {
               
                const color = (row + col) % 2 === 0 ? 'white' : 'black';
                
                const square = new Square(row, col, color);
                
                this.squares[row][col] = square;

                if (this.container) {
                    this.container.appendChild(square.element);
                }
            }
        }
    }
}