import * as superagent from 'superagent';
import * as React from 'react';
import IProduct from '../../models/product';

interface IProps{
	// match & param are from React route
	match:{
		params:{
			productId: string
		}
	}
}

interface IState{
	prodDetail: IProduct
}
class ProdDetail extends React.Component<IProps> {
	// partial and readonly are mapped properties
	// partial: helps to use property as nullable or undefined
	public state: Readonly<Partial<IState>> = {
		prodDetail: undefined
	}
	componentWillMount(){
		const url = 'http://5b209267ca762000147b2570.mockapi.io/api/Products/$(this.props.match.params.productId}';
		superagent
		.get(url)
      	.end((err: superagent.ResponseError, res: superagent.Response) => {
	        this.setState({
	          prodDetail: res.body
        	});
      });
	}
	public render(){
		return(
			<div>
				This is the detail page of {this.props.match.params.productId}
				{/* using ternary operator here to check if prodDetail is undefined or has a value */}
				<p>Name: {this.state.prodDetail ? this.state.prodDetail.title : undefined}</p>
			</div>
		)
	}
}

export default ProdDetail;