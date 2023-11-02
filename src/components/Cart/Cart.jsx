import React, { Component } from 'react'
import './CartStyle.css'

export default class Cart extends Component {
    renderCartList = () => {
        if (this.props.cartList.length === 0) {
            return;
        }
    }


    render() {
        return (
            <div>
                <div className="cart">
                    <button type="button" className="btn btn-secondary" fdprocessedid="dqiqg" data-bs-toggle="modal" data-bs-target="#shoppingCart">
                        <i className="bi bi-cart" />
                    </button>
                </div>
                <div className="modal fade" id="shoppingCart" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Your Shopping Cart</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Item Image</th>
                                            <th scope="col">Item Name</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Check out</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
