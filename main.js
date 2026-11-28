import { Board } from './src/class/Board.js';
import { Pawn } from './src/class/pieces/Pawn.js';
import { Rook } from './src/class/pieces/Rook.js';
import { Knight } from './src/class/pieces/Knight.js';

import { Queen } from './src/class/pieces/Queen.js';
import { King } from './src/class/pieces/King.js';

import { Bishop } from './src/class/pieces/Bishop.js';

let selectedPiece = null;
let selectedSquare = null;

let myBoard = new Board('board');

// Definicja kolejności figur w pierwszym rzędzie
const backRowPieces = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];

// Funkcja pomocnicza zwracająca literę do nazwy pliku graficznego
function getPieceLetter(PieceClass) {
    const name = PieceClass.name.toLowerCase();
    if (name === 'knight') return 'n';
    if (name === 'rook') return 'r';
    if (name === 'bishop') return 'b';
    if (name === 'queen') return 'q';
    if (name === 'king') return 'k';
    return 'p';
}

// Funkcja pomocnicza do rozstawiania całego rzędu figur
function setupRow(board, rowIdx, color, pieceClasses, filePrefix) {
    for (let colIdx = 0; colIdx < 8; colIdx++) {
        let PieceClass = pieceClasses[colIdx];
        let imgName = filePrefix + getPieceLetter(PieceClass) + '.png';
        
        let piece = new PieceClass(colIdx, rowIdx, color, `src/class/img/${imgName}`);
        let square = board.squares[rowIdx][colIdx];
        
        square.piece = piece;
        square.element.innerHTML = piece.render();
    }
}

// --- ROZSTAWIANIE FIGUR NA PLANSZY ---

// 1. Czarne figury (rząd 0)
setupRow(myBoard, 0, 'black', backRowPieces, 'b');

// 2. Czarne pionki (rząd 1)
for (let col = 0; col < 8; col++) {
    let blackPawn = new Pawn(col, 1, 'black', 'src/class/img/bp.png');
    let square = myBoard.squares[1][col];
    square.piece = blackPawn;
    square.element.innerHTML = blackPawn.render();
}

// 3. Białe pionki (rząd 6)
for (let col = 0; col < 8; col++) {
    let whitePawn = new Pawn(col, 6, 'white', 'src/class/img/wp.png');
    let square = myBoard.squares[6][col];
    square.piece = whitePawn;
    square.element.innerHTML = whitePawn.render();
}

// 4. Białe figury (rząd 7)
setupRow(myBoard, 7, 'white', backRowPieces, 'w');


// --- OBSŁUGA KLIKNIĘĆ I RUCHU ---

myBoard.squares.forEach((row, rowIndex) => {
    row.forEach((square, colIndex) => {
        square.element.addEventListener('click', () => {
            if (!selectedPiece && square.piece) {
                selectedPiece = square.piece;
                selectedSquare = square;
                square.element.style.backgroundColor = "yellow";
                console.log("Zaznaczono figurę!");
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