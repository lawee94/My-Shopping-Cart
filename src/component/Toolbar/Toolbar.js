import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Toolbar extends Component {

    viewByCat = (option) => {
        this.props.setOption(option)
        this.props.myProps.history.push('/products')
    }

    render(){
        return(
            <div>
                <div id="top-bar" className="container-fliud bg-dark my-0">
                    <div className="row">
                        <div className="col-sm-4">
                            <input type="text" className="input-block-level mx-auto px-3" placeholder="eg. T-sirt" />
                        </div>
                        <div className="col-sm-8 float-right text-right text-dark">
                            <ul className="user-menu">				
                                <li><Link to="/products">Product</Link></li>
                                <li><Link to="/cart">Cart ( {this.props.cartLen} )</Link></li>
                                <li><Link to="/checkout">Checkout</Link></li>
                                <li><Link to="/about">About</Link></li>		
                            </ul>
                        </div>
                    </div>
                </div>

            <div  className="container-fliud">
                <section className="navbar main-menu">
                    <div className="navbar-inner w-100 main-menu">				
                        <Link to="/" className="logo float-left">
                            <h2><strong>FEST@C MART</strong></h2>
                        </Link>

                        <nav id="menu" className="nav float-right">
                            <ul>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">Category</Link>
                                    <div className="dropdown-menu pointer">
                                        <Link to='/products' className="dropdown-item" >All Product </Link>
                                        <span onClick={() => this.viewByCat('cloth')} className="dropdown-item" >Cloth</span>
                                        <span onClick={() => this.viewByCat('shoe')} className="dropdown-item" >Shoe</span>
                                        <span onClick={() => this.viewByCat('gadget')} className="dropdown-item" >Gadget</span>
                                        <span className="dropdown-item" >Others</span>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Best Seller</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" to="#">Top Seller</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartLen: state.prd.cart.length
    }
}
const mapDispatchToProps = dispatch => {
    return {
		setOption: (prd) => dispatch({ type: 'SetOption' , product: prd })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);