import * as React from 'react';
import IProduct from '../../models/product';
import Product from '../product/Product';

interface IProps {
	list: IProduct[];
}

class ProductList extends React.Component<IProps>{
	componentWillMount(){
		//happens only once before rendering to DOM
	}

	componentDidMount(){
		//happens only once after rendering to the DOM
	}

	componentDidUpdate(){

	}

	shouldComponentUpdate(nextProps:IProps):boolean{
		//updates ProductList and its child component only when return is true
		if(nextProps.list.length !== this.props.list.length){
			return true;
		}
		return false;
	}

	public render(){
		const products = this.props.list.map(p=> <Product item={p} key={p.id} />);
		return(
			<div className="row">
				{ products }
			</div>
		)
	}
}

export default ProductList;