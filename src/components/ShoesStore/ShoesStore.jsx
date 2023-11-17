import React, { Component } from 'react'
import Header from '../Header/Header'
import productsData from "../../data/data.json"
import "./mainStyle.css"
import ProductList from '../ProductList/ProductList'
import ProductDetail from '../ProductDetail/ProductDetail'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'


export default class ShoesStore extends Component {
    state = {
        productDetail: productsData[0],
        cartList: []
    }
    getProductDetail = (product) => {
        this.setState({
            productDetail: product
        });
    }
    addToCart = (product) => {
        const currentCart = [...this.state.cartList];
        const index = currentCart.findIndex((element) => {
            return element.id === product.id;
        });

        // if the product was in the cart before, then add 1 to its quantity.
        if (index !== -1) {
            currentCart[index].cartQuantity++;
        } else {
            // if the product was never in the cart, then push it into cart with quantity = 1.
            const newProduct = { ...product, cartQuantity: 1 };
            currentCart.push(newProduct);
        }
        this.setState({
            cartList: currentCart
        });
    }
    render() {
        return (
            <div>
                <Header
                    cartList={this.state.cartList} />
                {/* <Login /> */}
                {/* <Signup /> */}
                <ProductList
                    productsData={productsData}
                    getProductDetail={this.getProductDetail} />

                <ProductDetail
                    productDetail={this.state.productDetail} />
            </div>
        );
    }
}
