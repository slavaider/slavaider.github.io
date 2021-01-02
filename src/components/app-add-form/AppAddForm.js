import './AppAddForm.css';
import React from "react";

const AppAddForm = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const todo = {
            text: e.target.text.value,
            id: Math.random(),
            classes: [{done: false, favorite: false}],
        }
        props.onAddItemHandler(todo)
        e.target.reset()
    }
    return (
        <div className="AppAddForm mt-2">
            <form onSubmit={onSubmit} className="form">
                <div className="input-group">
                    <textarea name='text' style={{resize: 'none'}} className='form-control'/>
                    <button type='submit' className="btn btn-success">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AppAddForm;
