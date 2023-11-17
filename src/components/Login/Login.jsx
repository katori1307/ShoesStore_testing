import React, { Component } from 'react'
import "./login_style.css"

export default class Login
    extends Component {
    render() {
        return (
            <div id="storeLogin">
                <div className="login-container">
                    <form className="login-form">
                        <h2>Welcome Back!</h2>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter Your Email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" />
                        <button type="submit">Login</button>
                        <div className="divider" />
                        <p className="signup">Don’t have an account? <a href="signup.html">Sign Up</a></p>
                    </form>
                </div>
            </div>

        );
    }
}
