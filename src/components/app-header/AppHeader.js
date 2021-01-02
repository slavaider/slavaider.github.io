import './AppHeader.css';
import React from "react";

const AppHeader = (props) => {
    return (
        <div style={{marginTop: 15}} className="AppHeader">
            {props.todos.filter(todo => !todo.classes.done).length} more to
            do, {props.todos.filter(todo => todo.classes.done).length} done
        </div>
    );
}

export default AppHeader;
