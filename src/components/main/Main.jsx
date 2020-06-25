import React, { Component } from 'react';
import './Main.css';

class Main extends Component{

    componentDidMount (){
        var loggedUser = localStorage.getItem("loggedUser");
        if (loggedUser === null) {
            alert("You're not logged in, you will be redirect to the login page.")
            window.location.href="/login";
        } else {
            document.getElementById("user").innerHTML = loggedUser;
        }
    }

    dropdownClicked(){
        if ( document.getElementById("signout").style.display === "") {
            document.getElementById("signout").style.display = "block";
        } else {
            document.getElementById("signout").style.display = "";
        }
    }

    signOut(){
        localStorage.removeItem("loggedUser");
        alert("Signout successful.");
        window.location.href="/login";
    }

    render() {
        return (
            <div>
                <header>
                    <p>
                        <h1 class="title">Todo app</h1>
                        <span class="user-placeholder">
                            <span class="user" id="user" onClick={this.dropdownClicked}></span>
                            <span class="signout" id="signout" onClick={this.signOut}>Signout</span>
                        </span>
                    </p>
                </header>
                <main class="todos-wrapper">
                    <p class="sub-title">My todos:</p>

                    <ul class="todos" id="todos">
                        <li class="todo">Testing a todo appearence</li>
                        <li class="todo">Testing a todo appearence</li>
                        <li class="todo">Testing a todo appearence</li>
                    </ul>

                </main>
            </div>
        )
    }
}

export default Main;
