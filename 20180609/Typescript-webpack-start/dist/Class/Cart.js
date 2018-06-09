"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        // use bytecode colon below
        miniCartContainerEl.textContent = "You have selected " + this.items.length + " in your cart";
    };
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map