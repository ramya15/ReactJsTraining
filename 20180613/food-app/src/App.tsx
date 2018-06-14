import * as superagent from 'superagent';
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
  showLoader: boolean;
};

class App extends React.Component<{}, IState> {

  public state: Readonly<IState> = {
    cart: [],
    products:[],
    showLoader: true
    // products: [
    //   {"id":1,"title":"Generic Cotton Bike","description":"Home","price":9.00,"imageUrl":"https://unsplash.it/200?image=1"},
    //   {"id":2,"title":"Ergonomic Frozen Sausages","description":"card","price":241.00,"imageUrl":"https://unsplash.it/200?image=2"}
    // ],
  };

  public componentWillMount(){
    // super({});
    superagent
      .get('http://5b209267ca762000147b2570.mockapi.io/api/Products')
      .end((err: superagent.ResponseError, res: superagent.Response)=>{
        this.setState({
          products: res.body,
          showLoader: false
      });
    });

    superagent
      .get('http://5b209267ca762000147b2570.mockapi.io/api/Cart')
      .end((err: superagent.ResponseError, res: superagent.Response) =>{
        this.setState({
          cart: res.body
        });
    });
  }

  public render() {
    let loaderComponent = null;
    if(this.state.showLoader){
      loaderComponent = (
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" 
            role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
        </div>
      )
    }
    return (
      <div>
        <div className="container">
          <nav className="site-header sticky-top">
            <div className="col-4">
              <h3>Food App</h3>
            </div>
            <div className="col-4">
              <MiniCart cart={this.state.cart}/>
            </div>
          </nav>
          </div>
          <div className="container">
            <ProductList list={this.state.products}/>
            {loaderComponent}
          </div>
      </div>
    );
  }
}

export default App;
