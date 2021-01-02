import {combineReducers} from "redux";
import TodoListReducer from "./reducers/todos_reducer";

export default combineReducers({todos:TodoListReducer})
