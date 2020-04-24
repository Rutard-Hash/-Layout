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

      console.log(this.calculateSum());
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
    calculateSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].counter;  //Перебор + сложение
        }
        return sum;
}

};






