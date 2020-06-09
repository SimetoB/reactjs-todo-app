import React, { Component } from 'react';
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
            localStorage.setItem([user], password);
            alert(`You've successfully registered as the user ${user}`);
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
                </form>
            </div>
        )
    }
}

export default Register;
