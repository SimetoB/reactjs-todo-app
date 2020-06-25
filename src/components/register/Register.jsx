import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends Component{
    handleSubmit(event) {
        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;
        var credential = {[user] : password};
        console.log(credential);

        if (localStorage.getItem(user)) {
            alert("This user already exists, please choose a different one.")
        } else {

            var data = {
                "password": password,
                "tasks": {}
             };
             
            localStorage.setItem([user], JSON.stringify(data));
            alert(`You've successfully registered as the user ${user}, please proceed to the login page.`);
            document.getElementById("login").className="login-visible";

        }

        event.preventDefault();
    }

    render(){
        return(
            <div class="wrapper">
                <form method="post" class="register-form" onSubmit={this.handleSubmit}>
                    <p class="label">Username:</p>
                    <input type="text" name="user" id="user" class="input" />
                    <p class="label">Password:</p>
                    <input type="password" name="password" id="password" class="input" /><br />
                    <button type="submit" class="submit" id="register">Register</button>
                    <Link to="/login" class="login-invisible" id="login" >Login here</Link>
                </form>
            </div>
        )
    }
}

export default Register;
