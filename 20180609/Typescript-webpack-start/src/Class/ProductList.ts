import {IProduct} from '../Models/Product';
import { Cart } from '../Class/Cart';
export class ProductList {
        private prodListContainer: HTMLDivElement;
        constructor(public list: Array<IProduct>, public cart: Cart){
            this.prodListContainer = document.querySelector(".product-list") as HTMLDivElement;
        }
        renderList(): void {
            this.list.forEach((item:IProduct) => {
                const divMain: HTMLDivElement = document.createElement('div');
                divMain.className = "product-item";
                
                const divEl: HTMLDivElement = document.createElement('div');
                const imgEl: HTMLImageElement = document.createElement('img');
                const btnEl: HTMLButtonElement = document.createElement('button');

                divEl.textContent = item.title + " - Price: " + item.price;
                imgEl.src = item.imgURL;
                btnEl.innerHTML = "Add to Cart";

                btnEl.addEventListener('click', ()=>{
                    this.cart.addToCart(item.id);
                });

                divMain.appendChild(divEl);
                divMain.appendChild(imgEl);
                divMain.appendChild(btnEl);

                this.prodListContainer.appendChild(divMain);

                
            });
        }
    }