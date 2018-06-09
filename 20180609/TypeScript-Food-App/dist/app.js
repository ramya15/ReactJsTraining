(function () {
    //Classes
    var Cart = /** @class */ (function () {
        function Cart() {
            this.items = [];
        }
        Cart.prototype.addToCart = function (productId) {
        };
        Cart.prototype.getCartItems = function () {
        };
        Cart.prototype.getTotalNumOfItems = function () {
        };
        Cart.prototype.renderCartBox = function () {
        };
        return Cart;
    }());
    var ProductList = /** @class */ (function () {
        function ProductList(list) {
            this.list = list;
            this.prodListContainer = document.querySelector(".product-list");
        }
        ProductList.prototype.renderList = function () {
            var _this = this;
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
            id: 1,
            title: "Samosa",
            imgURL: "images/Samosa.jpg",
            price: 15
        },
        {
            id: 1,
            title: "Jamoon",
            imgURL: "images/Jamoon.jpg",
            price: 10
        }
    ];
    //Invoking methods
    var productList = new ProductList(products);
    productList.renderList();
})();
