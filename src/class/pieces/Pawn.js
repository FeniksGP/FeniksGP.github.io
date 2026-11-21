import { Piece } from './Piece.js';

export class Pawn extends Piece{
    constructor(x, y, anchor, color, image) {
        super(x, y, anchor);
        this.color = color;
        this.image = image;
        this.piece.style.backgroundImage = "url('src/class/img/" + this.image + "')";
    }
    showMoves()
    {
        let moves = [];
    }
    move(){}
    
    render() {
        return `<img src="${this.image}" style="width: 80%; height: 80%; object-fit: contain;">`;
    }
}