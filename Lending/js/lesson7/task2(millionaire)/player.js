
const player = {
    counter: 0,

    gettingAnswer() {
        for (let i = 0; i < config.questions.length; i++) {
            let first = prompt(config.questions[i]);
            if (first === config.rightAnswers[i]) {
                player.counter++;
                alert("Вы обсолютно правы");
            } else {
                alert("Неверно, вы самое слабое звено")
            }
        }
    }
};