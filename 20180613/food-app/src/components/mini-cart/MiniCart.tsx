import * as React from 'react';
import ICartItem from '../../models/cartitem';

interface IProps{
	cart: ICartItem[]
}

class MiniCart extends React.Component<IProps>{

	public render(){
		return(
			<div className='bg-light-green'>	
				You have {this.props.cart.length} items in your cart
			</div>
		)
	}
}

export default MiniCart;