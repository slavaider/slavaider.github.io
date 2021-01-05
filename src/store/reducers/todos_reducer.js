import {DELETE_ITEM, ON_ADD_TODO, ON_DONE, ON_FAVORITE} from "../actions/action_types";

const initialState = {
    todo_list: [
        {text: 'Drink Coffee', id: Math.random(), classes: {done: false, favorite: false}},
        {text: 'Make app', id: Math.random(), classes: {done: false, favorite: false}},
        {text: 'Drink Tea', id: Math.random(), classes: {done: false, favorite: false}},
        {text: 'Have a lunch', id: Math.random(), classes: {done: false, favorite: false}},
    ]
}

export default function TodoListReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_ITEM:
            return {
                ...state,
                todo_list: state.todo_list.filter(todo => todo.id !== action.key)
            }
        case ON_DONE: {
            const todo_list = [...state.todo_list]
            const todo = todo_list.find(todo => todo.id === action.key)
            todo.classes.done = !todo.classes.done
            return {
                ...state,
                todo_list
            }
        }
        case ON_FAVORITE: {
            const todo_list = [...state.todo_list]
            const todo = todo_list.find(todo => todo.id === action.key)
            todo.classes.favorite = !todo.classes.favorite
            return {
                ...state,
                todo_list
            }
        }
        case ON_ADD_TODO: {
            const todo_list = [...state.todo_list,action.todo]
            return {
                ...state,
                todo_list
            }
        }

        default:
            return state
    }
}


