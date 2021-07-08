
import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    DEL_TODO,
} from '../actionTypes/actionTypes'

const initialState = {
    todos: [],
    todosLoading: false,
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: {
            return {...state, todos: action.payload}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true}
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false}
        }
        case PUSH_TODO: {
            return {...state, todos: [...state.todos, action.payload]}
        }
        case DEL_TODO: {
            return {...state, todos:[...state.todos.filter(todo => todo.id !== action.payload)]}
        }
        default:
            return state
    }
}