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
    
    const products: Array<IProduct> = [
        {
            id: 1,
            title: "Full Meals",
            imgURL: "~/images/FullMeals.jpg",
            price: 50
        },
        {
            id: 2,
            title: "Poori",
            imgURL: "~/images/Poori.jpg",
            price: 30
        },
        {
            id: 1,
            title: "Samosa",
            imgURL:"~/images/Poori.jpg",
            price: 15
        },
        {
            id: 1,
            title: "Jamoon",
            imgURL:"~/images/Jamoon.jpg",
            price: 10
        }
    ];

})()