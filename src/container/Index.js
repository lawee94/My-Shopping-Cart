import React, { Component } from 'react';
import Aux from '../hoc/Auxs'
// import * as actions from '../store/actions/auth';
import { connect } from 'react-redux'

import Feature from './Feature';
import Latest from './Latest';

class Index extends Component {

    componentDidMount(){
		this.hydrateStateFromLocalstorage()
    }

	hydrateStateFromLocalstorage = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart && this.props.hydrateState(cart) 
    }

    render(){ 

        return(
            <Aux>
                <div id="demo" className="carousel slide text-center bg-dark " data-ride="carousel">

                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='themes/images/carousel/banner-1.jpg' className="img-fluid mx-auto" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src='themes/images/carousel/banner-2.jpg' className="img-fluid mx-auto" alt="" />
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
                <Feature myProps={this.props} />
                <Latest myProps={this.props} />
                
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        feature: state.prd.feature,
        cart: state.prd.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hydrateState: (cart) => dispatch({ type: 'HydrateState', product: cart })
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Index );