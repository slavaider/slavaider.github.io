import './TodoListItem.css';
import React from "react";
import {deleteItem, onDone, onFavorite} from "../../store/actions/actions";
import {connect} from "react-redux";

class TodoListItem extends React.Component {
    render() {
        const classes = ['col-8', 'formatted']
        if (this.props.todo.classes.done) {
            classes.push('done')
        }
        if (this.props.todo.classes.favorite) {
            classes.push('favorite')
        }
        return (
            <>
                <span className="d-flex justify-content-between">
                    <code style={{cursor: 'pointer'}}
                          onClick={this.props.onDone.bind(this, this.props.todo.id)}
                          className={classes.join(' ')}
                    >
                        {this.props.todo.text}
                    </code>
                    <span>
                        <button
                            onClick={this.props.onFavorite.bind(this, this.props.todo.id)}
                            className="btn btn-sm btn-outline-success mr-1" type="button">
                            <i className='fa fa-exclamation'/>
                        </button>
                        <button
                            onClick={this.props.deleteItem.bind(this, this.props.todo.id)}
                            className="btn-sm btn btn-outline-danger"
                            type="button"
                        >
                            <i className='fa fa-trash'/>
                        </button>
                    </span>
                </span>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (key) => dispatch(deleteItem(key)),
        onDone: (key) => dispatch(onDone(key)),
        onFavorite: (key) => dispatch(onFavorite(key)),
    }
}
export default connect(null, mapDispatchToProps)(TodoListItem);
