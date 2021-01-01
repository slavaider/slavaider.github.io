import './App.css';
import React from "react";
import TodoList from "../todo-list/TodoList";

function App() {
    return (
        <div className="App container">
            <div className="col-6 offset-3 mt-3">
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
