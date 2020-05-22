import React, { Component } from 'react';
import Toolbar from '../component/Toolbar/Toolbar';
import Footer from '../component/Footer';
import { withRouter } from 'react-router-dom'

class Layout extends Component {

    render () {
        return (
            <div className="Content bg-white">
                <Toolbar myProps={this.props} />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Layout);