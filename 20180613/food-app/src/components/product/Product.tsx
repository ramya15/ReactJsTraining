import * as React from 'react';
import IProduct from '../../models/product';
import './Product.css';

interface IProps{
	item: IProduct;
	onAddtoCart: Function;
}

const Product: React.SFC<IProps> = ({item, onAddtoCart}: IProps) =>{
	const onClickEvent = () =>{
		onAddtoCart(item.id);
	}
	return (
			<div className="col-6 bg-gold">
				<div className="card">	
					<img className="card-imp-top dib shadow-1 pa3" src={item.imageUrl} />
					<div className="card-body">
						<h3 className="card-title">
							{item.title}
						</h3>
						<p className="card-text">
							{item.description}
						</p>
						<p className="card-text">
							{item.price}
						</p>
						<div>
							<button className="btn btn-success"
								onClick={onClickEvent}>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		)
}

// class Product extends React.Component<IProps> {
// 	public render(){
		
		
// 	}
// }

export default Product;