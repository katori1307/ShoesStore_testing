import React, { Component } from 'react'
import Header from './Header/Header'

export default class ShoesStore extends Component {
    state = {
        // productDetail: productsData[0],
        cartList: []
    }
    render() {
        return (
            <div className='header'>
                <Header />
            </div>
        )
    }
}
