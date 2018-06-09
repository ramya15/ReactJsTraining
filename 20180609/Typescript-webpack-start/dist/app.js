"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./Class/Cart");
var ProductList_1 = require("./Class/ProductList");
var products_1 = require("./Data/products");
var cart = new Cart_1.Cart();
var productList = new ProductList_1.ProductList(products_1.products, cart);
productList.renderList();
cart.renderCartBox();
//# sourceMappingURL=app.js.map