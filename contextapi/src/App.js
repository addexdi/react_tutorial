import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import TodoListContextProvider from './context/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded test container segment'>
        <AuthContextProvider>
          <TodoListContextProvider>
            <ThemeContextProvider>
              <Navbar />
              <TodoList />
            </ThemeContextProvider>
          </TodoListContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
