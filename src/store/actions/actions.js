import {DELETE_ITEM, ON_ADD_TODO, ON_DONE, ON_FAVORITE} from "./action_types";

export function deleteItem(payload) {
    return {
        type: DELETE_ITEM,
        key: payload
    }
}

export function onDone(payload) {
    return {
        type: ON_DONE,
        key: payload
    }
}

export function onFavorite(payload) {
    return {
        type: ON_FAVORITE,
        key: payload
    }
}

export function onAddItem(payload) {
    return {
        type: ON_ADD_TODO,
        todo: payload
    }
}


