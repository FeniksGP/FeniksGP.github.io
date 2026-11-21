import { Board } from './src/class/Board.js';

let myBoard = new Board('board');

let initialSetup = [
    { row: 0, col: 0, img: 'src/class/img/br.png' },
    { row: 0, col: 1, img: 'src/class/img/bn.png' },
    { row: 0, col: 2, img: 'src/class/img/bb.png' },
    { row: 0, col: 3, img: 'src/class/img/bq.png' },
    { row: 0, col: 4, img: 'src/class/img/bk.png' },
    { row: 0, col: 5, img: 'src/class/img/bb.png' },
    { row: 0, col: 6, img: 'src/class/img/bn.png' },
    { row: 0, col: 7, img: 'src/class/img/br.png' },

    { row: 1, col: 0, img: 'src/class/img/bp.png' },
    { row: 1, col: 1, img: 'src/class/img/bp.png' },
    { row: 1, col: 2, img: 'src/class/img/bp.png' },
    { row: 1, col: 3, img: 'src/class/img/bp.png' },
    { row: 1, col: 4, img: 'src/class/img/bp.png' },
    { row: 1, col: 5, img: 'src/class/img/bp.png' },
    { row: 1, col: 6, img: 'src/class/img/bp.png' },
    { row: 1, col: 7, img: 'src/class/img/bp.png' },

    { row: 6, col: 0, img: 'src/class/img/wp.png' },
    { row: 6, col: 1, img: 'src/class/img/wp.png' },
    { row: 6, col: 2, img: 'src/class/img/wp.png' },
    { row: 6, col: 3, img: 'src/class/img/wp.png' },
    { row: 6, col: 4, img: 'src/class/img/wp.png' },
    { row: 6, col: 5, img: 'src/class/img/wp.png' },
    { row: 6, col: 6, img: 'src/class/img/wp.png' },
    { row: 6, col: 7, img: 'src/class/img/wp.png' },

    { row: 7, col: 0, img: 'src/class/img/wr.png' },
    { row: 7, col: 1, img: 'src/class/img/wn.png' },
    { row: 7, col: 2, img: 'src/class/img/wb.png' },
    { row: 7, col: 3, img: 'src/class/img/wq.png' },
    { row: 7, col: 4, img: 'src/class/img/wk.png' },
    { row: 7, col: 5, img: 'src/class/img/wb.png' },
    { row: 7, col: 6, img: 'src/class/img/wn.png' },
    { row: 7, col: 7, img: 'src/class/img/wr.png' }
];

initialSetup.forEach(item => {
    let targetSquare = myBoard.squares[item.row][item.col];
    targetSquare.element.innerHTML = `<img src="${item.img}" style="width: 80%; height: 80%; object-fit: contain;">`;
});