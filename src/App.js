import './App.css';
import TodoGroup from './components/TodoGroup';
import TodoGenerator from './components/TodoGenerator';
import { useState } from 'react';

const initTodoList = [{ id: '123456789', text: 'go to school', done: false }];
function App() {
  const [todoList, setTodoList] = useState(initTodoList);
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoGroup todoList={todoList} setTodoList={setTodoList} />
      <TodoGenerator setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
