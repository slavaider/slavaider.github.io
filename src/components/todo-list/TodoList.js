import './TodoList.css';
import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";
import AppAddForm from "../app-add-form/AppAddForm";
import AppHeader from "../app-header/AppHeader";
import SearchPanel from "../search-panel/SearchPanel";


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter_type: '',
            filter_text: '',
            todos: [
                {text: 'awdadawdpwokadpwadaw1', id: Math.random(), classes: [{done: false, favorite: false}]},
                {text: 'awdadawdpwokadpwadaw2', id: Math.random(), classes: [{done: false, favorite: false}]},
                {text: 'awdadawdpwokadpwadaw3', id: Math.random(), classes: [{done: false, favorite: false}]},
                {text: 'awdadawdpwokadpwadaw4', id: Math.random(), classes: [{done: false, favorite: false}]},
            ],
        }
    }

    deleteItem = (key) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== key)})
    }
    onDone = (key) => {
        const todos = this.state.todos
        const todo = todos.find((todo) => todo.id === key)
        todo.classes.done = true
        this.setState({todos})
    }
    onFavorite = (key) => {
        const todos = this.state.todos
        const todo = todos.find((todo) => todo.id === key)
        todo.classes.favorite = true
        this.setState({todos})
    }

    onAddItem = (todo) => {
        const todos = this.state.todos
        todos.push(todo)
        this.setState(todos)
    }

    onFilter = (filter) => {
        this.setState({filter_type: filter.type, filter_text: filter.text})
    }

    render() {
        const filteredTodos = this.state.todos.filter((todo) => {
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
                <div className="d-flex justify-content-between">
                    <h1>TodoApp</h1>
                    <AppHeader todos={this.state.todos}/>
                </div>
                <SearchPanel onFilterHandler={(filter) => this.onFilter(filter)}/>
                <ul className='list-group'>
                    {filteredTodos.length !== 0 ?
                        filteredTodos.map((todo =>
                                (
                                    <TodoListItem
                                        deleteItemHandler={(key) => this.deleteItem.bind(this, key)}
                                        doneItemHandler={(key) => this.onDone.bind(this, key)}
                                        favoriteItemHandler={(key) => this.onFavorite.bind(this, key)}
                                        key={todo.id}
                                        todo={todo}
                                    />
                                )
                        )) : <h3 className='text-center'>Нет найденных элементов</h3>
                    }
                </ul>
                <AppAddForm onAddItemHandler={(todo) => this.onAddItem(todo)}/>
            </div>
        );
    }
}

export default TodoList;
