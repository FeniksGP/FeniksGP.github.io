import { Board } from './src/class/Board.js';
// Zmienne do śledzenia zaznaczenia
let selectedPiece = null;
let selectedSquare = null;

// Przechodzimy po wszystkich polach planszy
myBoard.squares.forEach((row, rowIndex) => {
    row.forEach((square, colIndex) => {
        
        square.element.addEventListener('click', () => {
            
         
            if (!selectedPiece && square.piece) {
                selectedPiece = square.piece;
                selectedSquare = square;
                
            
                square.element.style.backgroundColor = "yellow";
                console.log("Zaznaczono pionek!");
            }
            
        
            else if (selectedPiece) {
             
                square.piece = selectedPiece;
                square.element.innerHTML = selectedPiece.render();
                
             
                selectedSquare.piece = null;
                selectedSquare.element.innerHTML = ""; 
                selectedSquare.element.style.backgroundColor = ""; 
                
              
                selectedPiece.x = colIndex;
                selectedPiece.y = rowIndex;
                
             
                selectedPiece = null;
                selectedSquare = null;
                
                console.log(`Przesunięto na pole [${rowIndex}][${colIndex}]`);
            }
        });
        
    });
});

let myBoard = new Board('board');

let whitePawn = new Pawn(0, 6, 'white', 'src/class/img/wp.png');


let targetSquare = myBoard.squares[6][0];
targetSquare.element.innerHTML = whitePawn.render();

