let game = {

    run() {
        while (true) {
            player.gettingAnswer();
            switch (player.counter) {
                case 0:
                case 1:
                    alert("У вас очень мало правильных ответов, вы самое слабое звено");
                    break;
                case 2:
                case 3:
                    alert("Вы справились с вопросами более менее");
                    break;
                case 4:
                case 5:
                    alert("Вы гений");
                    break;
            }
            let skip = prompt("Если не хотите больше играть, нажмите отмена");
            if (skip === null) {
                console.log("Игра окончена.");
                return;
            }

        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        alert("Добро пожаловать в игру кто хочет стать миллионером \n (Сделанную очень плохо)");
        alert("Для ответа на вопрос введите латинскую букву понравившегося ответа \n \n Приятной игры)" );
        game.run();
    }
};

game.init();