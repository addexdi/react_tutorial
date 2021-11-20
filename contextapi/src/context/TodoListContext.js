import React, {createContext, useState, useReducer} from 'react';
import { todosReducer } from '../reducers/todosReducer';

export const TodoListContext = createContext();

// const todosReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 {text: action.text, id: Math.random()}
//             ];
//         case 'REMOVE_TODO': 
//             return state.filter((todo) => todo.id !== Number(action.id));
//         default:
//             return state;
//     }
// }

const TodoListContextProvider = ({children}) => {
    
    // const [todos, setTodos] = useState([
    //     {text: 'Plan the family trip', id: 1},
    //     {text: 'Go for shopping for dinner', id:2},
    //     {text: 'Go for a walk', id:3}
    // ]);

    // const addTodo = (todo) => {
    //     setTodos([
    //         ...todos,
    //         {text: todo, id: Math.random() }
    //     ]);
    // }

    // const removeTodo = (id) => {
    //     setTodos(todos.filter((todo) => {
    //         return todo.id !== Number(id);
    //     }));
    // }

    // return(
    //     <TodoListContext.Provider value={{todos, addTodo, removeTodo }}>
    //         {children}
    //     </TodoListContext.Provider>
    // )
    //RESTRUCTING TO USEREDUCER HOOKS
    const [todos, dispatch] = useReducer(todosReducer, [
        {text: 'Plan the family trip', id: 1},
        {text: 'Go for shopping for dinner', id:2},
        {text: 'Go for a walk', id:3}
    ]);

    return(
        <TodoListContext.Provider value={{todos, dispatch }}>
            {children}
        </TodoListContext.Provider>
    )

}

export default TodoListContextProvider;