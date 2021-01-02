import './TodoListItem.css';
import React from "react";

const TodoListItem = (props) => {
    const classes = ['col-9','formatted']
    if (props.todo.classes.done) {
        classes.push('done')
    }
    if (props.todo.classes.favorite) {
        classes.push('favorite')
    }
    return (
        <div className="TodoListItem">
            <li className="list-group-item">
                <div className="d-flex justify-content-between">
                    <code style={{cursor: 'pointer'}}
                          onClick={props.doneItemHandler(props.todo.id)}
                          className={classes.join(' ')}
                    >
                        {props.todo.text}
                    </code>
                    <div>
                        <button
                            onClick={props.favoriteItemHandler(props.todo.id)}
                            className="btn btn-sm btn-outline-success" type="button">Favorite
                        </button>
                        <button onClick={props.deleteItemHandler(props.todo.id)}
                                className="btn-sm btn btn-outline-danger" type="button">Delete
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );

}

export default TodoListItem;
