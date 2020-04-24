'use strict';

let butButton = document.querySelectorAll('.product__button');
butButton.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;              //Объявление + создание
        let name = event.srcElement.dataset.name;
        basket.add({id: id, price: price, name: name,});
    });
});

let basket = {
    products: {},

    add(product) {
      this.addProductToBasket(product);
      this.renderProducts(product);
      this.renderSum();
      this.removeBtnListener();
    },

    addProductToBasket(product) {
        if (basket.products[product.id] == undefined) {
            basket.products[product.id] = {
                price: product.price,
                name: product.name,                                     //Наполнение
                counter: 1,
            };
            console.log(basket.products);
        } else {
            basket.products[product.id].counter++;
            console.log(basket.products);
        }
    },
    renderProducts(product) {
        let productExist = document.querySelector(`.productCounter[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let productElem = `
            <div class="basket-item">
                <div>${product.id}</div>
                <div class="basket-item_name">${product.name}</div>
                <div class="basket-item_price">${product.price}</div>
                <div class="productCounter" data-id="${product.id}">1</div>
                <div><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></div>
            </div>
        `;
        let basketElem = document.querySelector('.basket');
        basketElem.insertAdjacentHTML("beforeend", productElem);
    },
    renderSum() {
        let total = document.querySelector('.total');
        total.innerText = basket.calculateSum();
    },
    calculateSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].counter;  //Перебор + сложение
        }
        return sum;
    },
    removeProduct(event) {
      basket.removeBtn(event);
      basket.renderSum();
    },
    removeBtnListener() {
        let btns = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', this.removeProduct);
        }
    },
    removeBtn(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromBasket(id);
        this.removeProductFromObject(id);
    },

    removeProductFromBasket(id) {
        let removeCount = document.querySelector(`.productCounter[data-id="${id}"]`);
        if (removeCount.textContent == 1) {
            removeCount.parentNode.remove();
        } else {
            removeCount.textContent--;
        }
    },

    removeProductFromObject(id) {
        if(this.products[id].counter == 1) {
            delete this.products[id];
        } else {
            this.products[id].counter--;
        }
    }

};






