let renderer = {
    // Сюда запишем все что надо отобразить.
    map: "",

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < config.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < config.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.

                //Блок проверок чтобы не выходить сквозь стены при обычном хождении
                if (player.y === row && player.x < 0) {
                    player.x = 0;
                } else if (player.y > 9 && player.x === col) {
                    player.y = 9;
                } else if (player.y < 0 && player.x === col) {
                    player.y = 0;
                } else if (player.y === row && player.x > 9) {
                    player.x = 9;
                }

                /*
                * Блок проверок чтобы не выходить сквозь стены при
                * хождении по диогонали*/
                if (player.x < 0 && player.y < 0) {
                    player.x = 0;
                    player.y = 0;
                } else if (player.x > 9 && player.y < 0) {
                    player.x = 9;
                    player.y = 0;
                } else if (player.x < 0 && player.y > 9) {
                    player.y = 9;
                    player.x = 0;
                } else if (player.x > 9 && player.y > 9) {
                    player.x = 9;
                    player.y = 9;
                }

                if (player.y === row && player.x === col) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
                if (player.y === row && player.x === 0) {
                    player.x = 0;
                }
                console.log(player.x)
                console.log(player.y)
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            this.map += '\n';
        }
        
        // Выводим все что надо отобразить в игре.
        console.log(this.map);
    },

    clear() {
        // Чистим консоль.
        console.clear();
        // Чистим карту.
        this.map = "";
    }
};

