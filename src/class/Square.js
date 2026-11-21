export class Square {
    constructor(row, col, color) {
        this.row = row;
        this.col = col;
        this.color = color; 
        this.piece = null;  

        this.element = document.createElement('div');
        this.element.classList.add('square', color);
      
        this.element.dataset.row = row;
        this.element.dataset.col = col;
    }
    setPiece(piece) {
        this.piece = piece;
        if (piece) {
            this.element.textContent = piece.symbol;
            this.element.dataset.piece = piece.name; 
            this.element.dataset.pieceColor = piece.color; 
        } else {
            this.element.textContent = '';
            delete this.element.dataset.piece;
            delete this.element.dataset.pieceColor;
        }
    }
}