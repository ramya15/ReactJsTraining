import * as React from 'react';
import { Link } from 'react-router-dom';
import IProduct from '../../models/product';
import './Product.css';

interface IProps {
    item: IProduct,
    onAddToCart: Function
}
const Product: React.SFC<IProps> = ({item, onAddToCart}: IProps) => {
    const onClickEvent = () => {
        onAddToCart(item.id);
    };
    return (
        <div className="col-6 product">  
            <div className="card bg-info">                    
                <img className="card-img-top" src={item.imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">
                        {item.title}
                    </h5>
                    <p className="card-text">
                        {item.description}
                    </p>
                    <p className="card-text">
                        Price: {item.price}
                    </p>
                    <div>
                        <button 
                            onClick={onClickEvent}
                            className="btn btn-success">
                            Add to Cart
                        </button>
                        <Link to="/productdetail">Product Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;