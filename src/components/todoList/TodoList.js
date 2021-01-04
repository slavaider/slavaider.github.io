import './TodoList.css';
import React from "react";
import AppAddForm from "../app-add-form/AppAddForm";
import AppHeader from "../app-header/AppHeader";
import SearchPanel from "../search-panel/SearchPanel";
import {connect} from "react-redux";
import TodoListItem from "../todoListItem/TodoListItem";


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter_type: '',
            filter_text: '',
        }
    }

    onFilter = (filter) => {
        this.setState({filter_type: filter.type, filter_text: filter.text})
    }

    render() {

        const filtered_todo_list = this.props.todos.filter((todo) => {
            switch (this.state.filter_type) {
                case'favorite':
                    return todo.classes.favorite
                case'done':
                    return todo.classes.done
                default:
                    return todo
            }
        }).filter(todo => {
            return todo.text.indexOf(this.state.filter_text) !== -1
        })

        return (
            <div className="TodoList mt-2">
                <AppHeader todos={this.props.todos}/>
                <SearchPanel onFilterHandler={(filter) => this.onFilter(filter)}/>
                <ul className='list-group'>
                    {filtered_todo_list.length !== 0 ?
                        filtered_todo_list.map((todo => (
                                <li key={todo.id} className="list-group-item">
                                    <TodoListItem
                                        todo={{...todo}}
                                    />
                                </li>
                            )
                        )) : <h3 className='text-center'>Нет найденных элементов</h3>}
                </ul>
                <AppAddForm/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos.todo_list,
    };
}

export default connect(mapStateToProps, null)(TodoList);
