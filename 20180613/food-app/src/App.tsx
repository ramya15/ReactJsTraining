import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import MiniCart from './components/mini-cart/MiniCart';
import ProductList from './components/product-list/ProductList';
import ICartItem from './models/cartitem';
import IProduct from './models/product';

interface IState {
  cart: ICartItem[];
  products: IProduct[];
};

class App extends React.Component<{}, IState> {

  public state: Readonly<IState> = {
    cart: [],
    products: [
      {"id":1,"title":"Generic Cotton Bike","description":"Home","price":9.00,"imageUrl":"https://unsplash.it/200?image=1"},
      {"id":2,"title":"Ergonomic Frozen Sausages","description":"card","price":241.00,"imageUrl":"https://unsplash.it/200?image=2"}
    ]
  };

  public componentWillMount(){
    // super({});
    const promise = axios.get('http://5b209267ca762000147b2570.mockapi.io/api/Products');
    promise.then((response)=> {
      this.setState({
        products: response.data
      });
    });
  }

  public render() {
    return (
      <div className="container">
          <nav className="site-header sticky-top">
            <div className="col-4">
              <h3>Food App</h3>
            </div>
            <div className="col-4">
              <MiniCart cart={this.state.cart}/>
            </div>
          </nav>
          <div className="container">
            <ProductList list={this.state.products}/>
          </div>
      </div>
    );
  }
}

export default App;
