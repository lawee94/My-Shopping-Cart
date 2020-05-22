import React from 'react';
import { Link } from 'react-router-dom';

import facebook from '../assests/facebook.png';
import twitter from '../assests/twitter.png';
import linkedin from '../assests/linkedin.png';
import path from '../assests/path.png';
import instagram from '../assests/instagram.png';
import skype from '../assests/skype.png';
import youtube from '../assests/youtube.png';

const footer = (props) => (
    <div>
        <section id="footer-bar" className="pl-5">
				<div className="row">
					<div className="col-sm-3">
						<h4>Navigation</h4>
						<ul className="">
							<li><Link to="/">Homepage</Link></li>  
							<li><Link to="/about">About Us</Link></li>
							<li><Link to="/contact">Contac Us</Link></li>
							<li><Link to="/cart">Your Cart</Link></li>							
						</ul>					
					</div>
					<div className="col-sm-4">
						<h4>My Account</h4>
						<ul className="">
							<li><Link to="#">My Account</Link></li>
							<li><Link to="#">Order History</Link></li>
							<li><Link to="#">Wish List</Link></li>
							<li><Link to="#">Newsletter</Link></li>
						</ul>
					</div>
					<div className="col-sm-5 text-white">
					<h1><p>FEST@C MART</p></h1>
						<p>The best store for your wears...Check on us in this links below</p>
						<br/>
						<div className="">
							<Link className="mx-2" to="#"><img width="10" src={facebook} alt="" /></Link>
							<Link className="mx-2" to="#"><img width="20" src={twitter} alt="" /></Link>
							<Link className="mx-2" to="#"><img width="20" src={path} alt="" /></Link>
							<Link className="mx-2" to="#"><img width="20" src={skype} alt="" /></Link>
                            <Link className="mx-2" to="#"><img width="20" src={youtube} alt="" /></Link>
							<Link className="mx-2" to="#"><img width="20" src={instagram} alt="" /></Link>
                            <Link className="mx-2" to="#"><img width="20" src={linkedin} alt="" /></Link>
						</div>
					</div>					
				</div>	
			</section>
			<section className='text-center py-0 bg-dark text-white'>
				<p>Copyright 2020 Fest@c Mart. All right reserved.</p>
			</section>
		
    </div>
)

export default footer