import React, { Component } from 'react'
import { connect } from 'react-redux'
import RightPanel from './RightPanel';
import Pagination from '../component/Pagination';
import * as func from '../store/utility/func';

const OPTION = [
	{value: 'all', displayValue: 'All'},
	{value: 'men', displayValue: 'Men'},
	{value: 'ladies', displayValue: 'Ladies'},
	{value: 'kid', displayValue: 'Kid'},
	{value: 'gadget', displayValue: 'Gadget'},
	{value: 'sport', displayValue: 'Sport'},
	{value: 'bag', displayValue: 'Bag'},
	{value: 'shoe', displayValue: 'Shoe'}
]

class Products extends Component {

	state = { 
		perPage: 6,
		prd: [],
		category: [],
		form:{ cat: func.InputElement('select', '', '', {}, 'Products', OPTION) },
	}

	UNSAFE_componentWillMount(){
		this.setState({ category: this.props.prod })
	}

	componentDidMount(){
		this.optionHandler(this.props.option)
		this.hydrateStateFromLocalstorage()
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

	viewProdDetail = (prd) => {
        this.props.history.push('/productDetail', {prod: prd})
	}
	
	handlePageClick = data => {
		let offset = Math.ceil(data.selected * this.state.perPage);
		this.loadProduct(this.state.category, offset);
	};

	loadProduct = (prd, offset) => {
		let prod = prd.slice(offset, offset + this.state.perPage)
		this.setState({ prd: prod})
	}

	inputHandler = (event) => {
		let value = event.target.value
		let rel = this.optionHandler(value)
		const updatedState = func.inputHandler(event, 'cat', this.state.form)
		rel = value === 'all' ? this.props.prod : rel
		this.setState({ form: updatedState, category: rel})
		this.loadProduct(rel, 0)
	}

	optionHandler = (value) => {
		let rel = []
		this.props.prod.map( val => ( val.tags.includes(value) || val.category === value) && rel.push(val))
		rel = value === 'all' ? this.props.prod : rel
		this.loadProduct(rel, 0)
		return rel
	}

    render() {
		let box = func.getArrayFromState(this.state.form).map( formElement => {
            return func.formElement(formElement, (event) => this.inputHandler(event))
			})
        return (
            <section className="main-content">
				<h5 className="ml-3">{box}</h5><hr />
				<div className="row">	
					{ this.state.prd.length <= 0 && <div className="col-md-9 ">
						<h3 className='text-center my-5'><strong>NO PRODUCT IN THIS CATEGORY</strong></h3>
					</div>}
					{ this.state.prd.length > 0 && <div className="col-md-9 ">
						<ul className="row listing-products mx-auto">
							{this.state.prd.map( (prd, index) => (
								<li key={index} className="col-sm-4">
									<div className="product-box">
										<div onClick={() => this.viewProdDetail(prd)} >
											<span className="sale_tag"></span>
											<img className="img-fluid mb-3" src={prd.image} alt="" />
											<p className="title my-1"><strong>{prd.name.toUpperCase()}</strong></p>
											<p className="category my-1 text-danger">{prd.category}</p>
											<h5 className="price mt-2"><strong>#{prd.price}</strong></h5>
										</div>
										<button onClick={() => this.updateCart({Qty: 1, product: prd})} className="btn btn-block btn-dark">ADD TO CART</button>
									</div>
								</li>
							))}       
						</ul>								
						<Pagination 
							prod={this.state.category} 
							perPage={this.state.perPage} 
							click={this.handlePageClick} 
						/>
					</div> }
                    <RightPanel myProps={this.props} />
				</div>

				
			</section>
        )
    }
}

const mapStateToProps = state => {
    return {
		prod: state.prd.feature,
		cart: state.prd.cart,
		option: state.prd.option
    };
};

const mapDispatchToProps = dispatch => {
    return {
		AddToCart: (prd) => dispatch({ type: 'Addtocart' , product: prd }),
		hydrateState: (cart) => dispatch({ type: 'HydrateState', product: cart })
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Products);
