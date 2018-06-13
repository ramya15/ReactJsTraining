import * as React from 'react';
import IProduct from '../../models/product';

interface IProps{
	item: IProduct;
}

class Product extends React.Component<IProps> {
	public render(){
		return (
			<div className="col-6">
				{this.props.item.title}
			</div>
		)
		
	}
}

export default Product;