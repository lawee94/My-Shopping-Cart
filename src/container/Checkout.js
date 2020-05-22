import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as func from '../store/utility/func';
import { Link } from 'react-router-dom';

class Checkout extends Component {
	state = {
        info: {
			firstname: {...func.InputElement("input", 'text', 'First Name', { required: true }) },
			lastname: {...func.InputElement("input", 'text', 'Last Name (Optional)', { }) },
            email: {...func.InputElement("input", "email", "Email", { required: true, isEmail: true })},
			phone: func.InputElement('input', 'number', '08034343434', { required: true, minLength: 11, maxLength: 11, isNumeric: true }),
			address: {...func.InputElement("textarea", 'text', 'Address', { required: true }) },
			suite: {...func.InputElement("textarea", 'text', 'Apartment, Suite (Optional)')},
			state: {...func.InputElement("input", 'text', 'State', { required: true }) },
			lga: {...func.InputElement("input", 'text', 'L.G.A', { required: true }) },
		},
		error: null,
		shipping: 1500
	}

	componentDidMount(){
		this.hydrateStateFromLocalstorage()
    }

	hydrateStateFromLocalstorage = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart && this.props.hydrateState(cart) 
    }
	
	inputHandler = (event, id, myState, type) => {
        const updatedState = func.inputHandler(event, id, myState)
        this.setState({ type: updatedState})
    }

	render() {

		let infoField = func.getArrayFromState(this.state.info).map( (formElement, index) => {
			let inp = index < 4 && func.formElement(formElement, (event) => this.inputHandler(event, formElement.id, this.state.info, 'info') )
			return inp
			})
		let infoField2 = func.getArrayFromState(this.state.info).map( (formElement, index) => {
			let inp = index >= 4 && func.formElement(formElement, (event) => this.inputHandler(event, formElement.id, this.state.info, 'info') )
			return inp
			})
			
		return (
			<section className="main-content">
				<h4 className="mx-5 my-3" >Checkout</h4><hr />	
				<div className="row p-2">
					<div className='col-lg-5 '>
						{ this.props.cart.length <= 0 && <div className='text-center'>
							<h3><strong>CART IS EMPTY</strong></h3>
						</div>}
						{ this.props.cart.length > 0 && <table className="table" style={{marginLeft: '2%'}}>
						<tbody>
							{this.props.cart.map( (prd, index) => (
								<tr key={index}>
									<td>
										<div style={{maxWidth: '50px'}}>
											<img className='img-fluid' alt="" src={prd.product.image} />
										</div>
									</td>
									<td>{prd.product.name} ({prd.Qty})</td>
									<td className="text-right">{prd.product.price * prd.Qty}</td>
								</tr>			  
							))}
							<tr>
								<td className='text-right' colSpan='3'>
									<p><span className='float-left'>Sub-Total:</span> 
									<span className="float-right"><strong> #{this.props.total}</strong></span></p>
								</td>
							</tr>
							<tr>
								<td className='text-right' colSpan='3'>
									<p><span className='float-left'>Shipping:</span> 
									<span className="float-right"><strong> #{this.state.shipping}</strong></span></p>
								</td>
							</tr>
							<tr>
								<td className='text-right' colSpan='3'>
									<p><span className='float-left'>Total:</span> 
									<span className="float-right"><strong> #{this.props.total + this.state.shipping}</strong></span></p>
								</td>
							</tr>
						</tbody>
					</table> }
						<hr/>
					</div>
					<div className='col-lg-7 border px-auto'>
						<form className='row text-center mb-5'>
							<div className="col-lg-6 ">{infoField}</div>
							<div className="col-lg-6">{infoField2}</div>
							<Link to='/cart' className='mx-auto'><button className="btn btn-warning  mt-3">Return to Cart</button></Link>
							<button className="btn btn-dark mx-auto mt-3">Continue to Payment</button>
						</form>
					</div>
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
		hydrateState: (cart) => dispatch({ type: 'HydrateState', product: cart })
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Checkout);