import * as superagent from 'superagent';
import * as React from 'react';
import ProductList from '../../components/product-list/ProductList';
import ICartItem from '../../models/cartitem';
import IProduct from '../../models/product';

interface IState {
  cart: ICartItem[];
  products: IProduct[];
  showLoader: boolean;
};

class Home extends React.Component{
public state: Readonly<IState> = {
    cart: [],
    products:[],
    showLoader: true
  };

  public getProduct = () =>{
    superagent
      .get('http://5b209267ca762000147b2570.mockapi.io/api/Products')
      .end((err: superagent.ResponseError, res: superagent.Response)=>{
        this.setState({
          products: res.body,
          showLoader: false
      });
    });
  }

  public getCart = () =>{
    superagent
      .get('http://5b209267ca762000147b2570.mockapi.io/api/Cart')
      .end((err: superagent.ResponseError, res: superagent.Response) =>{
        this.setState({
          cart: res.body
        });
    });
  }

	public componentWillMount(){
    this.getProduct();
  }

  public render(){
  	let loaderComponent = null;
    if(this.state.showLoader){
      loaderComponent = (
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" 
            role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
        </div>
      )
    }
		return(
			<React.Fragment>	
				<ProductList 
	              getCart = {this.getCart}
	              list={this.state.products}
	            />
	            {loaderComponent}
			</React.Fragment>
		)
	}
}

export default Home;