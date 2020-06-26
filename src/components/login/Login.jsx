import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component{
    handleSubmit(event) {
        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;
        var credential = {[user] : password};
        console.log(credential);

        if (JSON.parse(localStorage.getItem(user)).password === password) {
            localStorage.setItem("loggedUser", user);
            window.location.pathname="/";
        } else {
            alert("Invalid login! Please try again.");
        }

        event.preventDefault();
    }

    render(){
        return(
            <div class="wrapper">
                <form method="post" class="login-form" onSubmit={this.handleSubmit}>
                    <p class="label">Username:</p>
                    <input type="text" name="user" id="user" class="input" />
                    <p class="label">Password:</p>
                    <input type="password" name="password" id="password" class="input" /><br />
                    <p>
                        <button type="submit" class="submit" id="login">Login</button>
                        <Link to="/register" class="register">Register here</Link>
                    </p>
                </form>
            </div>
        )
    }
}

export default Login;
