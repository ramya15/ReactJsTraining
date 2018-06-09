"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductList = /** @class */ (function () {
    function ProductList(list, cart) {
        this.list = list;
        this.cart = cart;
        this.prodListContainer = document.querySelector(".product-list");
    }
    ProductList.prototype.renderList = function () {
        var _this = this;
        this.list.forEach(function (item) {
            var divMain = document.createElement('div');
            divMain.className = 'product-item col-12, col-sm-6';
            //divMain.className = "product-item";
            var prodTitleEl = document.createElement('h3');
            var divEl = document.createElement('div');
            var imgEl = document.createElement('img');
            var btnEl = document.createElement('button');
            divEl.textContent = item.title + " - Price: " + item.price;
            imgEl.src = item.imgURL;
            btnEl.innerHTML = "Add to Cart";
            btnEl.className = 'btn btn-primary';
            btnEl.addEventListener('click', function () {
                _this.cart.addToCart(item.id);
            });
            divMain.appendChild(divEl);
            divMain.appendChild(imgEl);
            divMain.appendChild(btnEl);
            _this.prodListContainer.appendChild(divMain);
        });
    };
    return ProductList;
}());
exports.ProductList = ProductList;
//# sourceMappingURL=ProductList.js.map