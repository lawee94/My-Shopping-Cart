import React, { Component } from 'react'
import { connect } from 'react-redux';

class RightPanel extends Component {

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

    updateCart = (prd) => {
        this.props.AddToCart(prd)
        this.saveStateToLocalstorage()
	}
	
	viewDetails = (prd) => {
        this.props.myProps.history.push('/productdetail', {prod: prd})
	}

	ViewByCategory = (option) => {
		console.log(option)
		this.props.setOption(option)
		this.props.myProps.history.push('/products')
	}
	
	render() {
		console.log()
		let no = 0
		return (
			<div className="col-md-3 ">
				<div className="block">
					<h4 className="title">
						<span className="float-left"><span className="text">Latest</span></span>
						<span className="float-right">
							<a className="left button" href="#rightLatest" data-slide="prev"> </a>
							<a className="right button" href="#rightLatest" data-slide="next"> </a>
						</span>
					</h4>
					<div id="rightLatest" className="carousel slide">
						<div className="carousel-inner">
							<div className="active carousel-item">
								<ul className="listing-products p-0">
									{this.props.prod.map( (prd, index) => (
										index === 0  && <li key={index} > 
											<div className="product-box">
												<div onClick={() => this.viewDetails(prd)} >
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

		 					{Array(10).fill().map( (x,i) => {
								let prds = <div key={i} className="carousel-item px-0">
									<ul className="row px-0 mx-auto">	
										{this.props.prod.map((prd, index) => (
											index >= no && index < i+1 && <li key={index}> 
												<div className="product-box">
													<div onClick={() => this.viewDetails(prd)} >
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
								no = no + 1
								return prds
							})}

						</div>
					</div>
				</div>
				<div className="block">								
					<h4 className="title"><strong>Best</strong> Seller</h4>								
					<ul className="small-product">
						{this.props.best.map( (val, index) => (
							<li className="pointer" key={index}  >
								<img onClick={() => this.viewDetails(val)} src={val.image} alt="" />
								<span onClick={() => this.viewDetails(val)}><strong>{val.name}</strong></span>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
		prod: state.prd.allProduct,
		best: state.prd.best,
		cart: state.prd.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
		AddToCart: (prd) => dispatch({ type: 'Addtocart', product: prd })
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(RightPanel);

