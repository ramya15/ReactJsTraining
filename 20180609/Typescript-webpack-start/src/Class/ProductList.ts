import {IProduct} from '../Models/Product';
export class ProductList {
        private prodListContainer: HTMLDivElement;
        constructor(public list: Array<IProduct>, public cart: Cart){
            this.prodListContainer = document.querySelector(".product-list") as HTMLDivElement;
        }
        renderList(): void {
            let count = 0;
            this.list.forEach((item:IProduct) => {
                const divMain: HTMLDivElement = document.createElement('div');
                divMain.className = "product-item";
                
                const divEl: HTMLDivElement = document.createElement('div');
                const imgEl: HTMLImageElement = document.createElement('img');
                const btnEl: HTMLButtonElement = document.createElement('button');

                divEl.textContent = item.title + " - Price: " + item.price;
                imgEl.src = item.imgURL;
                btnEl.innerHTML = "Add to Cart";

                divMain.appendChild(divEl);
                divMain.appendChild(imgEl);
                divMain.appendChild(btnEl);

                btnEl.addEventListener('click', ()=>{
                    this.cart.addToCart(item.id);
                });

                this.prodListContainer.appendChild(divMain);
            });
        }
    }