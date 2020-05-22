import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as func from '../store/utility/func';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {

	state = {
		form:{
			qty: func.InputElement('select', '', '', {}, 'Quantity:', Array(10).fill().map( (x,i) => ({value: i+1, displayValue: i+1} )) )
		},
		related: [],
		product: this.props.location.state.prod,
		count: 0
	}

	UNSAFE_componentWillMount(){
		this.setState({ related: this.relatedProduct() , count: parseInt(this.relatedProduct().length/4) })
	}

	componentDidMount(){
		this.hydrateStateFromLocalstorage()
	}

	componentDidUpdate(prevProps, prevState){
		if(this.state.product !== prevState.product){
			this.setState({ related: this.relatedProduct() , count: parseInt(this.relatedProduct().length/4) })
		}
	}

	componentWillUnmount(){
        this.saveStateToLocalstorage()
    }

    saveStateToLocalstorage = () => {
        let cart = [...this.props.cart]
        if(cart){
            cart = JSON.stringify(cart)
            localStorage.setItem('cart', cart)
        }
	}
	
	hydrateStateFromLocalstorage = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart && this.props.hydrateState(cart) 
    }

    updateCart = (prd) => {
        this.props.AddToCart(prd)
        this.saveStateToLocalstorage()
    }

	relatedProduct = () => {
		let rel = []
		this.props.prd.map( val => (
			this.state.product.tags.some( tag => val.tags.includes(tag)) && rel.push(val)
		))
		rel = rel.filter( val => val.id !== this.state.product.id)
		return rel
	}

	viewProduct = (prd) => {
		this.setState({ product: prd})
	}
	
	inputHandler = (event) => {
        const updatedState = func.inputHandler(event, 'qty', this.state.form)
        this.setState({ form: updatedState})
	}
	
	getQty = () => {
		let qty = this.state.form.qty.value
		qty <= 0 && (qty = 1)
		return qty
	}

    render() {
		let no = 3
		let box = func.getArrayFromState(this.state.form).map( formElement => {
            return func.formElement(formElement, (event) => this.inputHandler(event))
			})
        return (
            <section className='main-content'>
                <h4 className="mx-5 my-3" >Product Detail</h4><hr />		
				<div className="row w-100 mx-auto" >						
						<div className="row mx-auto">

							<div className="col-sm-4 px-0 ">
                                <div className='w-100'>
									<div className="ml-3 text-center ">
									<img alt="" className="img-fluid img-thumbnail" src={this.state.product.image} />																				
									</div>
                                </div>
							</div>
                            
							<div className="col-sm-8 px-5">
								<h5>Product Name: <strong>{this.state.product.name}</strong></h5>
								<h5>Product Code: <strong> {this.state.product.id}</strong> </h5>
								<h5>Availability: <strong>Avaliable</strong></h5>											
								<h5>Price: <strong> #{this.state.product.price}</strong></h5>
								<h5>{box}</h5>
								<button onClick={() => this.updateCart({Qty: this.getQty() , product: this.state.product})} className="btn btn-warning mr-2">ADD TO CART</button>
								<Link to="/checkout"><button className="btn btn-dark">BUY IT NOW</button></Link>
							</div>
													
							<div className="col-sm-12">	<br />

								<h4 className="title">
									<span className="float-left"><span className="text"><strong>Related</strong> Products</span></span>
									<span className="float-right">
										<a className="left button" href="#related" data-slide="prev"> 
                                        </a><a className="right button" href="#related" data-slide="next"> </a>
									</span>
								</h4>

								<div id="related" className="carousel slide">
									<div className="carousel-inner">

										<div className="active carousel-item">
											<ul className="row px-0 listing-products">
												{this.state.related.map( (prd, index) => (
													index < 4 && <li key={index} className="col-sm-3">
														<div className="product-box">
															<div onClick={() => this.viewProduct(prd)} >
																<span className="sale_tag"></span>
																<img className="img-fluid mb-3" src={prd.image} alt="" />
																<p className="title my-1"><strong>{prd.name.toUpperCase()}</strong></p>
																<p className="category my-1 text-danger">{prd.category}</p>
																<h5 className="price mt-2"><strong>#{prd.price}</strong></h5>
															</div>
															<button onClick={() => this.updateCart({Qty: 1, product: prd})} className="btn btn-dark">ADD TO CART</button>
														</div>
													</li>
												))}									
											</ul>
										</div>

										{Array(this.state.count).fill().map( (x,i) => {
											let prds = <div key={i} className="carousel-item px-0">
													<ul className="row px-0 mx-auto">	
														{this.state.related.map((prd, index) => (
															index > no && index < 4 * (i+2) && <li key={index} className="col-sm-3"> 
																<div className="product-box">
																	<div onClick={() => this.viewProduct(prd)} >
																		<span className="sale_tag"></span>
																		<img className="img-fluid mb-3" src={prd.image} alt="" />
																		<p className="title my-1"><strong>{prd.name.toUpperCase()}</strong></p>
																		<p className="category my-1 text-danger">{prd.category}</p>
																		<h5 className="price mt-2"><strong>#{prd.price}</strong></h5>
																	</div>
																	<button onClick={() => this.updateCart({Qty: 1, product: prd})} className="btn btn-dark">ADD TO CART</button>
																</div>
															</li>
														))}
													</ul>
												</div>
												no = no + 4
												return prds
											})}
									</div>
								</div>
							</div>
						</div>
					</div>
					
				
			</section>	
        )
    }
}
const mapStateToProps = state => {
    return {
		prd: state.prd.feature,
		cart: state.prd.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
		AddToCart: (prd) => dispatch({ type: 'Addtocart' , product: prd }),
		hydrateState: (cart) => dispatch({ type: 'HydrateState', product: cart })
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ProductDetail);
