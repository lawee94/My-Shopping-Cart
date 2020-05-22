import React, { Component } from 'react'
import * as func from '../store/utility/func';

class Contact extends Component {
	state = {
        controls: {
            name:{...func.InputElement("input", 'name', 'Name', { required: true }) },
            email: {...func.InputElement("input", "email", "Email", { required: true, isEmail: true })},
            message:{...func.InputElement("textarea", ' ', 'Message', { required: true }) },
        },
        error: null
    }

	render() {

		let box = func.getArrayFromState(this.state.controls).map( formElement => {
            return func.formElement(formElement, (event) => this.inputHandler(event, formElement.id))
			})
			
		return (
			<div className="w-100 p-3" style={{ height: '69vh'}}>
				<section className="google_map">
					<iframe title="map" width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
						src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=74%2F6+Nguy%E1%BB%85n+V%C4%83n+Tho%E1%BA%A1i,+S%C6%A1n+Tr%C3%A0,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam&amp;aq=0&amp;oq=74%2F6+Nguyen+Van+Thoai+Da+Nang,+Viet+Nam&amp;sll=37.0625,-95.677068&amp;sspn=41.546728,79.013672&amp;ie=UTF8&amp;hq=&amp;hnear=74+Nguy%E1%BB%85n+V%C4%83n+Tho%E1%BA%A1i,+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+Da+Nang,+Vietnam&amp;t=m&amp;ll=16.064537,108.24151&amp;spn=0.032992,0.039396&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
				</section>
				<h5 className="mt-4 ml-4">Contact Us</h5><hr />
				<div className="row">
					<div className="col-sm-6 p-5">
						<h5>ADDITIONAL INFORMATION</h5><br />
						<p><strong>Phone: </strong> 08068139788</p>
						<p>	<strong>Email:</strong>&nbsp;<a href="/">festac94@gmail.com</a>	</p>
						<br/>
					</div>
					<div className="col-sm-6 text-center">	
						{box}
						<button className="btn btn-dark mt-4">Send Message</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;
