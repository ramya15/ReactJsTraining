import * as React from 'react';
import ICartItem from '../../models/cartitem';

interface IProps {
    cart: ICartItem[]
}

const MiniCart : React.SFC<IProps> = ({cart}) => {
    return (
        <span>
            You have {cart.length} items in your cart
        </span>
    )
}

export default MiniCart;