import * as React from 'react';
import IProduct from '../../models/product';
import Product from '../product/Product';

interface IProps {
	list: IProduct[];
}

class ProductList extends React.Component<IProps>{
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