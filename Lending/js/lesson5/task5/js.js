let table = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    },

    start() {
        let board = this.createBoard();
        document.body.innerHTML = board;
    },


    createBoard() {
        let board = '';
        let startingColor = 'white';

        for( let i = 0; i < this.config.rows.length; i++) {
            let row = 0;
            if (startingColor === 'white') {
                row = this.createRow(startingColor, this.config.rows[i]);
                startingColor = 'black';
            } else {
                row = this.createRow(startingColor, this.config.rows[i]);
                startingColor = 'white'
            }
            board += row;
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    createRow(startingColor, rowNumber) {
        let currentColor = startingColor;
        let row = '';
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = '';
            if (currentColor === 'white') {
                field = this.createCell('white', rowNumber, this.config.cols[i]);
                currentColor = 'black';
            } else {
                field = this.createCell('black', rowNumber, this.config.cols[i]);
                currentColor = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    createCell (color, rowNumber, colChar) {
        return `<td data-rowNumber="${rowNumber}" data-colChar="${colChar}" class="${color}"></td>`;
    },
};

table.start();
