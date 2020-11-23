import React, {Component, Fragment} from 'react';
import Logo from './logo.svg';

// Styles CSS
import './NavegationMobile.css';

//React Router DOM
import {Link} from 'react-router-dom';


class NavegationMobile extends Component{
    constructor(){
        super();
        this.state = {
            number: 5
        }
    }

    // Function for event click
    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
        console.log(this.state.number)
    }

    render(){
        return (
            <Fragment>
            <nav className="navbar shadow-nav navbar-expand-lg navbar-light bg-light sticky-top">
                <div>
                        {/** Menu */}
                        <span className="icon-menu" style={{
                            color: '#212529',
                            fontSize: '22px'
                        }} onClick={this.handleClick}></span>
                    
                    <Link to="/" className="navbar-brand ml-2" href="#">
                        <img src={Logo} width="162" height="100" alt="logo" loading="lazy" />
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" href="#">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/products" className="nav-link" href="#">
                            Products
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/services" className="nav-link" href="#">
                            Services
                        </Link>
                    </li>
                    
                    </ul>
                </div>

                <div>
                    <Link to="/mycount"><span className="icon icon-search ml-3"></span></Link>
                    <Link to="/mycount"><span className="icon icon-user ml-3"></span></Link>
                    <Link className="cart" to="/cart">
                        <span className="icon icon-ct-cart ml-3"></span>
                        <span class="badge badge-warning cart-num">0</span>    
                    </Link>
                    
                </div>    
            </nav>
            </Fragment>
        )
    }
}

export default NavegationMobile;