import React, { Component } from 'react'
import "./HeaderStyle.css"
import Cart from '../Cart/Cart';

export default class Header extends Component {
    render() {
        return (
            <div id="storeHeader">
                <nav className="navbar navbar-expand-lg bg-dark" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">FashionHub</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <div className="cart">
                                        <button type="button" className="btn btn-secondary" fdprocessedid="dqiqg" data-bs-toggle="modal" data-bs-target="#shoppingCart">
                                            <i className="bi bi-cart" />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Cart
                        cartList={this.props.cartList} />
                </nav>
            </div>


        );
    }
}
