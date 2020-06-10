import React, { Component } from 'react';
import './Main.css';

class Main extends Component{


    render() {
        return (
            <div>
                <header>
                    <p>
                        <h1 class="title">Todo app</h1>
                        <span class="user-placeholder">Username placeholder</span>
                    </p>
                </header>
                <main class="todos-wrapper">
                    <p class="sub-title">My todos:</p>

                    <ul class="todos">
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
