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

        this.renderTodos();
    }

    renderTodos (){
        // Get all tasks for logged user in JSON format
        var curTasks = JSON.parse(localStorage.getItem(localStorage.getItem("loggedUser"))).tasks;

        // Render each tasks from the JSON into the ul list
        for (var i in curTasks) {
            document.getElementById("todos").innerHTML += "<li class=\"todo\" id=\"" + i + "\"> \
                                                            <span class=\"todo-title\">" + curTasks[i].title + "</span> \
                                                            <span class=\"desc\">" + curTasks[i].desc + "</span> \
                                                            <span class=\"time\">" + curTasks[i].time + "</span> \
                                                        </li> \
                                                        <span class=\"checkmark\" title=\"Mark done\" data-task=\"" + i + "\" data-action=\"complete\">&#10004;</span> \
                                                        <span class=\"delete\" title=\"Delete\" data-task=\"" + i + "\"  data-action=\"delete\">&#10060;</span>";
            // Add styling if the task is not active
            if (curTasks[i].active == 0) {
                document.getElementById(i).style.opacity = 0.5;
                document.getElementById(i).style.border = "1px solid green";
            }
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

        // Generate new todo object
        var newTodo = {"title": title, "desc" : desc, "time": time, "active" : 1};
        var userJSON = JSON.parse(localStorage.getItem(localStorage.getItem("loggedUser")));
        var i = 1;

        while (userJSON.tasks["task" + i] !== undefined) {
            i++;
        }

        userJSON.tasks["task" + i] = newTodo;

        var userData = JSON.stringify(userJSON);
        localStorage.setItem(localStorage.getItem("loggedUser"), userData);
    }

    todoButtonClicked(e) {
        if (e.target.dataset.action === "complete") {
            changeStatus(e)
        } else if (e.target.dataset.action === "delete") {
            deleteTodo(e);
        } else {
            return;
        }

        function changeStatus(e) {
            var userJSON = JSON.parse(localStorage.getItem(localStorage.getItem("loggedUser")));
            var curTask = e.target.dataset.task;

            if (userJSON.tasks[curTask].active === 1) {
                userJSON.tasks[curTask].active = 0;
            } else {
                userJSON.tasks[curTask].active = 1;
            }

            var userData = JSON.stringify(userJSON);
            localStorage.setItem(localStorage.getItem("loggedUser"), userData);
        }

        function deleteTodo(e) {
            var userJSON = JSON.parse(localStorage.getItem(localStorage.getItem("loggedUser")));
            var curTask = e.target.dataset.task;

            delete userJSON.tasks[curTask];

            var userData = JSON.stringify(userJSON);
            localStorage.setItem(localStorage.getItem("loggedUser"), userData);
        }

        window.location.reload();
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
                    <ul class="todos" id="todos" onClick={this.todoButtonClicked}></ul>
                </main>
            </div>
        )
    }
}

export default Main;
