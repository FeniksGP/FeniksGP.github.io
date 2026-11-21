/*export class Piece {//class of general piece
    constructor(x, y, anchor) {
        this.x = x;
        this.y = y;
        this.anchor = anchor;
        this.piece = document.createElement('div');
        this.piece.id = "p" + this.x + this.y;
        this.piece.style.backgroundPosition = "center";
        this.piece.style.width = "20px";//this value will be changed because now it tests if it work
        this.piece.style.height = "20px";
        this.piece.style.position = "absolute";
        this.piece.style.zIndex = "5";
        this.anchor.appendChild(this.piece);
    }
    showMoves() {}//show possible moves of piece
    move(){}//move a piece
} */
export class Piece {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    showMoves() {}
    move() {}
}