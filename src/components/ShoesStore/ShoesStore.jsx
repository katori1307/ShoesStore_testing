import React, { Component } from 'react'
import Header from '../Header/Header'
import productsData from "../../data/data.json"
import "./mainStyle.css"
import ProductList from '../ProductList/ProductList'
import ProductDetail from '../ProductDetail/ProductDetail'


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
    render() {
        return (
            <div>
                <Header />
                <div className="main-heading">
                    <h1>Shoes fashion</h1>
                </div>
                <ProductList
                    productsData={productsData}
                    getProductDetail={this.getProductDetail} />

                <ProductDetail
                    productDetail={this.state.productDetail} />
            </div>
        );
    }
}
