import * as React from 'react';
import ICartItem from '../../models/cartitem';

interface IProps{
	cart: ICartItem[]
}

class MiniCart extends React.Component<IProps>{

	public render(){
		return(
			<div>	
				{this.props.cart.length}
			</div>
		)
	}
}

export default MiniCart;