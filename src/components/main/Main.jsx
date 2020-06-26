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
        window.location.href="/login";
    }

    addTodo() {
        var title = document.getElementById("title").value;
        var desc = document.getElementById("desc").value;
        var time = document.getElementById("time").value;

        var newTodo = JSON.stringify({"title": title, "desc" : desc, "time": time});
        var userJson = JSON.parse(localStorage.getItem(localStorage.getItem("loggedUser")));
        var i = 1;

        while (userJson.tasks["task" + i] !== undefined) {
            i++;
        }

        userJson.tasks["task" + i] = {"title" : title, "desc" : desc, "time": time};
        var userData = JSON.stringify(userJson);

        localStorage.setItem(localStorage.getItem("loggedUser"), userData);
    }

    render() {
        return (
            <div>
                <header>
                    <p>
                        <h1 class="title">Todo app</h1>
                        <div class="user-placeholder">
                            <span class="user" id="user" onClick={this.dropdownClicked}></span>
                            <span class="signout" id="signout" onClick={this.signOut}>Signout</span>
                        </div>
                    </p>
                </header>
                <main class="todos-wrapper">

                    <form class="add-todo-form">
                        <input type="text" class="new-todo-input" id="title" placeholder="Title"></input>
                        <input type="text" class="new-todo-input" id="desc" placeholder="Description"></input>
                        <input type="number" class="new-todo-input" id="time" placeholder="Time in hours"></input>
                        <button class="add-todo-button" onClick={this.addTodo}>Add a new todo</button>
                    </form>

                    <p class="sub-title">My todos:</p>
                    <ul class="todos" id="todos"></ul>
                </main>
            </div>
        )
    }
}

export default Main;
