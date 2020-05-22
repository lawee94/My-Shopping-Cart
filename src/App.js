import React, { Component } from 'react';
import { Switch, Route,  withRouter } from 'react-router-dom'
import Layout from './hoc/Layout';

import Index from './container/Index';
import Products from './container/Products';
import ProductDetail from './container/ProductDetail';
import Contact from './container/Contact';
import Cart from './container/Cart';
import Checkout from './container/Checkout';
import About from './container/About';

class App extends Component {
	
	render() {

		return (
			<div>
			<Switch>
				<Layout>
					<Route path='/' exact component={Index} />
					<Route path='/productDetail' exact component={ProductDetail} />
					<Route path='/products' exact component={Products} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/cart' exact component={Cart} />
					<Route path='/checkout' exact component={Checkout} />
					<Route path='/about' exact component={About} />
				</Layout>
			</Switch>	
			</div>
		)
	}
};
  
export default withRouter( App );