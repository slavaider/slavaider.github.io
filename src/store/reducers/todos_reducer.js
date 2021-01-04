import {DELETE_ITEM, ON_ADD_TODO, ON_DONE, ON_FAVORITE} from "../actions/action_types";

const initialState = {
    todo_list: [
        {text: '1', id: Math.random(), classes: {done: true, favorite: true}},
        {text: '2', id: Math.random(), classes: {done: false, favorite: false}},
        {text: '3', id: Math.random(), classes: {done: false, favorite: false}},
        {text: '4', id: Math.random(), classes: {done: false, favorite: false}},
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
            const todo_list = [...state.todo_list]
            todo_list.push(action.todo)
            return {
                ...state,
                todo_list
            }
        }

        default:
            return state
    }
}


