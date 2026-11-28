    import { Piece } from './Piece.js';
export class Bishop extends Piece{
    constructor(x, y, color, image) {
        super(x, y);
        this.color = color;
        this.image = image;
    }
    showMoves(){}
    move(){}
}