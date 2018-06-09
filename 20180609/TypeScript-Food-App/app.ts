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
    class Cart{
        private items: Array<ICartItem> =[];
        addToCart(productId: number){

        }
        getCartItems(){

        }
        getTotalNumOfItems(){

        }
        renderCartBox(){

        }
    }

    class ProductList{
        constructor(public list: Array<IProduct>){
            
        }
        renderList(){

        }
    }
})()