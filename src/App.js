import { observer } from 'mobx-react';
import './App.css';
import TodoGroup from './components/TodoGroup';
import TodoGenerator from './components/TodoGenerator';

const App = observer(() => {
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
});

export default App;
