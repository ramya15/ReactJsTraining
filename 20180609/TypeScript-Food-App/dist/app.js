(function () {
    //Classes
    var Cart = /** @class */ (function () {
        function Cart() {
            this.items = [];
        }
        Cart.prototype.addToCart = function (productId) {
            this.items.push({
                id: this.items.length + 1,
                productId: productId,
                quantity: 1
            });
            this.renderCartBox();
        };
        Cart.prototype.getCartItems = function () {
        };
        Cart.prototype.getTotalNumOfItems = function () {
        };
        Cart.prototype.renderCartBox = function () {
            var miniCartContainerEl = document.querySelector('.mini-cart');
            miniCartContainerEl.textContent = "You have selected " + this.items.id + " in your cart";
        };
        return Cart;
    }());
    var ProductList = /** @class */ (function () {
        function ProductList(list, cart) {
            this.list = list;
            this.cart = cart;
            this.prodListContainer = document.querySelector(".product-list");
        }
        ProductList.prototype.renderList = function () {
            var _this = this;
            var count = 0;
            this.list.forEach(function (item) {
                var divMain = document.createElement('div');
                divMain.className = "product-item";
                var divEl = document.createElement('div');
                var imgEl = document.createElement('img');
                var btnEl = document.createElement('button');
                divEl.textContent = item.title + " - Price: " + item.price;
                imgEl.src = item.imgURL;
                btnEl.innerHTML = "Add to Cart";
                divMain.appendChild(divEl);
                divMain.appendChild(imgEl);
                divMain.appendChild(btnEl);
                btnEl.addEventListener('click', function () {
                    _this.cart.addToCart(item.id);
                });
                _this.prodListContainer.appendChild(divMain);
            });
        };
        return ProductList;
    }());
    var products = [
        {
            id: 1,
            title: "Full Meals",
            imgURL: "images/FullMeals.jpg",
            price: 50
        },
        {
            id: 2,
            title: "Poori",
            imgURL: "images/Poori.jpg",
            price: 30
        },
        {
            id: 3,
            title: "Samosa",
            imgURL: "images/Samosa.jpg",
            price: 15
        },
        {
            id: 4,
            title: "Jamoon",
            imgURL: "images/Jamoon.jpg",
            price: 10
        }
    ];
    //Invoking methods
    var cart = new Cart();
    var productList = new ProductList(products, cart);
    productList.renderList();
    cart.renderCartBox();
})();
//# sourceMappingURL=app.js.map