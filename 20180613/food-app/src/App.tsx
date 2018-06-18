import * as superagent from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Route , Link } from 'react-router-dom';
import './App.css';
import MiniCart from './components/mini-cart/MiniCart';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ProdDetail from './pages/productdetail/ProdDetail';
import ICartItem from './models/cartitem';

interface IState {
  cart: ICartItem[];
};

class App extends React.Component<{}, IState> {  
  public state : Readonly<IState> = {
    cart: []
  };

  componentDidMount(){
    console.log('inside componentDidMount');
  }

  componentDidUpdate(){
    console.log('inside componentDidUpdate');
  }

  public getCart = () => {
    superagent
      .get('http://5b209267ca762000147b2570.mockapi.io/api/Cart')
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        this.setState({
          cart: res.body
        });
      });
  }

  componentWillMount(){
    console.log('inside componentWillMount');
    this.getCart();
  }

  public render() {
    return (
      <div className="container">
        <nav className="site-header sticky-top row">
          <div className="col-4">
            <h3>Food App</h3>
          </div>          
          <div className="col-4">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
              <MiniCart cart={this.state.cart} />
          </div>
        </nav>
        <div className="container">
                <Route 
                  exact={true} 
                  path="/" 
                  component={Home} 
                />
                <Route 
                  path="/about" 
                  component={About} 
                />
                {/* : states that it is a dynamic property */}
                <Route
                  path="/productdetail/:productId"
                  component={ProdDetail}
                />
        </div>
      </div>
    );
  }
}

export default App;
