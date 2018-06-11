import * as $ from 'jquery';
import {IProduct} from '../Models/Product';
import { Cart } from '../Class/Cart';
export class ProductList {
        private prodListContainer: HTMLDivElement;
        constructor(public list: Array<IProduct>, public cart: Cart){
            this.prodListContainer = $('.product-list') as JQuery<HTMLDivElement>;
            //this.prodListContainer = document.querySelector('.product-list') as HTMLDivElement;
        }
        renderList(): void {
            this.list.forEach((item:IProduct) => {
                const prodDivJqueryEl: JQuery<HTMLDivElement> = $('<div />') as JQuery<HTMLDivElement>;
                
                const divMain: HTMLDivElement = document.createElement('div');
                divMain.className = 'product-item col-12, col-sm-6';
                //divMain.className = "product-item";
                
                const prodTitleEl: HTMLHeadingElement = document.createElement('h3');
                const divEl: HTMLDivElement = document.createElement('div');
                const imgEl: HTMLImageElement = document.createElement('img');
                const btnEl: HTMLButtonElement = document.createElement('button');

                divEl.textContent = item.title + " - Price: " + item.price;
                imgEl.src = item.imgURL;
                btnEl.innerHTML = "Add to Cart";
                btnEl.className = 'btn btn-primary';

                btnEl.addEventListener('click', ()=>{
                    this.cart.addToCart(item.id);
                });

                prodDivJqueryEl.append(prodTitleEl);
                divMain.appendChild(divEl);
                divMain.appendChild(imgEl);
                divMain.appendChild(btnEl);

                this.prodListContainer.appendChild(divMain);

                
            });
        }
    }