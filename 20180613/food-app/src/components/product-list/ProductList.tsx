import * as React from 'react';
import * as superagent from 'superagent';
import IProduct from '../../models/product';
import Product from '../product/Product';

interface IProps {
	list: IProduct[];
	getCart: () => void;
}

class ProductList extends React.Component<IProps>{
	//CALLING API
    public addToCart = (productId: number) => {
        superagent
            .post('http://5b209267ca762000147b2570.mockapi.io/api/Cart')
            .send({
                productId,
                quantity: 1
            })
            .set('accept', 'json')
            .end(() => {
                alert('Added successfully');
                this.props.getCart();
            });
    }

    // componentWillMount(){
	// 	//happens only once before rendering to DOM
	// }

	// componentDidMount(){
	// 	//happens only once after rendering to the DOM
	// }

	// componentDidUpdate(){
	// 	//happens each time 
	// }
    shouldComponentUpdate(nextProps: IProps): boolean{
    	//updates ProductList and its child component only when return is true
        if(nextProps.list.length !== this.props.list.length){
            return true;
        }
        return false;
    }
    public render(){
        const products = this.props.list.map(p => {
            return (
                <Product 
                    item={p} 
                    key={p.id} 
                    onAddToCart={this.addToCart}
                />
            )
        });
        return (
            <div className="row">
                {products}
            </div>
        )
    }
}

export default ProductList;