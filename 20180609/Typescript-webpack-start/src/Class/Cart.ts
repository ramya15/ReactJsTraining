import {ICartItem} from '../Models/CartItem';
export class Cart {
        private items: Array<ICartItem> =[];
        addToCart(productId: number){
            this.items.push({
                id: this.items.length + 1,
                productId: productId,
                quantity: 1
            });
            this.renderCartBox();
        }
        getCartItems(){

        }
        getTotalNumOfItems(){

        }
        renderCartBox(){
            const miniCartContainerEl = document.querySelector('.mini-cart');
            // use bytecode colon below
            miniCartContainerEl.textContent = `You have selected ${this.items.length} in your cart`;
        }
    }