import './AppAddForm.css';
import React from "react";
import {onAddItem} from "../../store/actions/actions";
import {connect} from "react-redux";

class AppAddForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        const todo = {
            text: e.target.text.value,
            id: Math.random(),
            classes: {done: false, favorite: false},
        }
        this.props.onAddItem(todo)
        e.target.reset()
    }

    render() {
        return (
            <div className="AppAddForm mt-2">
                <form onSubmit={(event) => this.onSubmit(event)} className="form">
                    <div className="input-group">
                        <textarea name='text' style={{resize: 'none'}} className='form-control'/>
                        <button type='submit' className="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (todo) => dispatch(onAddItem(todo)),
    }
}
export default connect(null, mapDispatchToProps)(AppAddForm);
