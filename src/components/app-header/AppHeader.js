import './AppHeader.css';
import React from "react";

const AppHeader = (props) => (
    <div className="AppHeader">
        <div className="d-flex justify-content-between">
            <h1>TodoApp</h1>
            <div style={{marginTop: 15}}>
                {props.todos.filter(todo => !todo.classes.done).length} more to
                do, {props.todos.filter(todo => todo.classes.done).length} done
            </div>
        </div>
    </div>
)


export default AppHeader;
