(function(){
    //Models
    interface IProduct{
        id: number;
        title: string;
        imgURL: string;
        price: number;
    }

    interface ICartItem{
        id: number;
        productId: number;
        quantity: number;
    }

    //Classes
    class Cart {
        constructor(){

        }
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
            miniCartContainerEl.textContent = 'You have selected ${this.id} in your cart';
        }
    }

    class ProductList {
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
    
    const products: Array<IProduct> = [
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
            imgURL:"images/Samosa.jpg",
            price: 15
        },
        {
            id: 4,
            title: "Jamoon",
            imgURL:"images/Jamoon.jpg",
            price: 10
        }
    ];

    //Invoking methods
    const cart = new Cart();
    const productList = new ProductList(products, cart);
    productList.renderList();
    cart.renderCartBox();

})()