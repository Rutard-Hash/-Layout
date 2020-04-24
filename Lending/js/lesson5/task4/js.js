'use strict';

function hideText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.description').remove();
    card.button.innerText = 'Подробнее';
}

function showText(card) {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur cupiditate delectus deleniti doloribus dolorum est explicabo illo iusto' +
        ' laboriosam minus molestiae necessitatibus obcaecati odit omnis possimus, quas sit tempore temporibus tenetur totam velvoluptate voluptates. ' +
        'Aliquam consequuntur culpa, cupiditate fugiat minima nesciunt numquam, provident quis quos rem voluptas, voluptates?';
    card.img.style.display = 'none';
    card.productName.insertAdjacentHTML('afterend', `<div class="description">${text}</div>`);
    card.button.innerText = 'Отмена'
}

function Switch(clickedButton) {
    const cardNode = clickedButton.target.parentNode; // Родительский Product

    let card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.product__name'),
        button: cardNode.querySelector('button'),
    };

    let buttonText = card.button.innerText;

    if (buttonText === "Подробнее") {
        showText(card);
    } else if (buttonText === "Отмена") {
        hideText(card);
    }
}

const openBtns = document.querySelectorAll('button');
openBtns.forEach(function (button) {
    button.addEventListener('click', function (event) {
        Switch(event);
    });
});

