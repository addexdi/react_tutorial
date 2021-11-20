// import React from "react";
// import { ThemeContext } from '../context/ThemeContext';

// class TodoList extends React.Component {
//     static contextType = ThemeContext;
//     render () {
//         const {isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return(
//             <div style={{background:theme.background, text:theme.text, height: '140px', textAlign: 'center'}}>
//                 <p className='item'>Plan the family trip</p>
//                 <p className='item'>Go for shopping for dinner</p>
//                 <p className='item'>Go for a walk</p>
//                 <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
//             </div>
//         )
//     }
// }

//REFACTORING TO HOOKS USECONTEXT
import React , {useContext, useState} from "react";
import { ThemeContext } from '../context/ThemeContext';
import { TodoListContext } from "../context/TodoListContext";

const TodoList = () => {
    const [todo, setTodo] = useState('');
    // const { todos, addTodo, removeTodo } = useContext(TodoListContext);
    const { todos, dispatch} = useContext(TodoListContext);
    const {isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // addTodo(todo);
        dispatch({type: 'ADD_TODO', text: todo});
        setTodo('');
    };

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        // removeTodo(id);
        dispatch({type: 'REMOVE_TODO', id });
    };

    return(
        <div style={{background:theme.background, text:theme.text, textAlign: 'center'}}>
            {todos.length ? 
                (todos.map((todo) => {
                        return <p id={todo.id} onClick= {handleRemoveTodo} className='item' key={todo.id}>{ todo.text }</p>
                    })
                ) : (
                    <div>You have no todos</div>
                )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='todo'>Add todo: </label> 
                <input type='text' id='todo' onChange={handleChange} value={todo} />
                <input type='submit' className='ui button primary' value='Add new todo' />
            </form>
            <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
        </div>
    );
}

export default TodoList;