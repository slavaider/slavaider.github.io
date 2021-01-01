import './AppAddForm.css';
import React from "react";

const AppAddForm = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const todo = {
            text: e.target.text.value,
            classes: [{done: false, favorite: false}],
        }
        props.onAddItemHandler(todo)
    }
    return (
        <div className="AppAddForm mt-2">
            <form onSubmit={onSubmit} className="form">
                <div className="input-group">
                    <input type="text" name='text' className='form-control'/>
                    <button type='submit' className="btn btn-success">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AppAddForm;
