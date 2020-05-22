import React, { Component } from 'react'
import { connect } from 'react-redux';

class Feature extends Component {
    state = {
        count: this.props.feature.length / 4
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

    updateCart = (prd) => {
        this.props.AddToCart(prd)
        this.saveStateToLocalstorage()
    }
    
    viewFeatureDetail = (prd) => {
        this.props.myProps.history.push('/productDetail', {prod: prd})
    }

    render() {

        let no = 3

        return (
            <section className="container-fluid my-5">
                <div className="row">
                    <div className='w-100 px-4'>
                        <h4 className="title" >
                            <span className="float-left"><span className="text"><span className="line">Feature <strong>Products</strong></span></span></span>
                            <span className="float-right">
                                <a className="left button" href="#feature" data-slide="prev"> </a>
                                <a className="right button" href="#feature" data-slide="next"> </a>
                            </span>
                        </h4>
                    </div>
                    <div  className="container-fluid">
                        <div id="feature" className=" carousel slide" >
                            <div className="carousel-inner">

                                <div className="active carousel-item px-0">
                                    <ul className="row px-0 mx-auto">	
                                        {this.props.feature.map((prd, index) => (
                                            index < 4 && <li key={index} className="col-sm-3" >
                                                <div className="product-box">
                                                    <div onClick={() => this.viewFeatureDetail(prd)} >
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
                                </div>

                                {Array(this.state.count-1).fill().map( (x,i) => {
                                   let prds = <div key={i} className="carousel-item px-0">
                                   <ul className="row px-0 mx-auto">	
                                       {this.props.feature.map((prd, index) => (
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
        </section>
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
        AddToCart: (prd) => dispatch({ type: 'Addtocart', product: prd }),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Feature);
