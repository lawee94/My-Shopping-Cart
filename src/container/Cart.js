import React, { Component } from 'react'
import { connect } from 'react-redux'
import RightPanel from './RightPanel';
import { Link } from 'react-router-dom'

class Cart extends Component {
	state = {
		cart: this.props.cart
	}

	componentDidMount(){
		this.hydrateStateFromLocalstorage()
	 }

	componentDidUpdate(prevProps, prevState){
		this.props.cart !== JSON.parse(localStorage.getItem('cart').length) && this.saveStateToLocalstorage()
	}

	componentWillUnmount(){
        this.saveStateToLocalstorage()
    }

	hydrateStateFromLocalstorage = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart && this.props.hydrateState(cart) 
    }

    saveStateToLocalstorage = () => {
        let cart = [...this.props.cart]
        if(cart){
            cart = JSON.stringify(cart)
            localStorage.setItem('cart', cart)
		}
		this.props.cart.length === 0 && localStorage.removeItem('cart')
    }

	inputHandler = (event, prd) => {
		let val = event.target.value.replace(/[^0-9.]/g, '')
		document.getElementById(prd.product.id).value = val
		if(val !== '' ){
			let index = this.props.cart.findIndex( val => val.product.id === prd.product.id)
			let newCart = [...this.props.cart]
			newCart[index] = {Qty: parseInt(val), product: prd.product}
			this.props.setTotal(newCart) 
		}
	} 
	
    render() {
        return (
            <section className='main-content'>			
				<div className="row w-100 mx-auto mt-3" >						
					<div className="col-md-9">
					<h4 className="title"><span className="text"><strong>Your</strong> Cart</span></h4>
					{ this.props.cart.length === 0 && <div  className='text-center my-5'>
						<h3><strong>Cart is Empty</strong></h3><br />
						<p><a href='/products'>Click here to start shopping</a></p>
					</div>}
					{ this.props.cart.length > 0 && <table className="table ">
						<thead>
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>QTY</th>
								<th>Price</th>
								<th className="text-right">Total</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{this.props.cart.map( (prd, index) => (
								<tr key={index}>
									<td>
										<div className="img-cont">
											<img className='img-fluid' alt="" src={prd.product.image} />
										</div>
									</td>
									<td>{prd.product.name}</td>
									<td>
										<input id={prd.product.id} pattern="^[0-9]*$" className='col-4' type='text' onChange={(event) => this.inputHandler(event, prd)} defaultValue={prd.Qty} />
									</td>
									<td>{prd.product.price}</td>
									<td className="text-right">{prd.product.price * prd.Qty}</td>
									<td className="text-right text-danger">
										<h4 onClick={() => this.props.RemoveFromCart(prd)} style={{cursor: 'pointer'}}><strong>x</strong></h4>
									</td>
								</tr>			  
							))}
							<tr>
								<td className='text-right' colSpan='5'>
									<h5>Sub-Total: <strong> #{this.props.total}</strong></h5>
								</td><td> </td>
							</tr>		  
						</tbody>
					</table> }
						<hr/>
						{ this.props.cart.length > 0 && <p className="buttons center">				
							<Link to="/products"><button className="btn btn-dark mx-2" type="button">Continue Shopping</button></Link>
							<Link to="/checkout"><button className="btn btn-dark" type="submit" id="checkout">Checkout</button></Link>
						</p>}	
					</div>
					<RightPanel myProps={this.props}/>
				</div>
			</section>	
        )
    }
}
const mapStateToProps = state => {
    return {
		cart: state.prd.cart,
		total: state.prd.total
    };
};

const mapDispatchToProps = dispatch => {
    return {
		AddToCart: (prd) => dispatch({ type: 'Addtocart' , product: prd }),
		RemoveFromCart: (prd) => dispatch({ type: 'Removefromcart' , product: prd }),
		hydrateState: (cart) => dispatch({ type: 'HydrateState', product: cart }),
		setTotal: (cart) => dispatch({ type: 'SetTotal', product: cart })
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Cart);
