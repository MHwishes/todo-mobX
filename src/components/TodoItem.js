import { useContext } from 'react';
import { observer } from 'mobx-react';
import { TodoStoreContext } from '../store';

const TodoItem = observer(({ todoItem }) => {
  const { text, id, done } = todoItem;
  const store = useContext(TodoStoreContext);

  return (
    <div className='todo-item-container'>
      <div
        className={done ? 'todo-item todo-done' : 'todo-item'}
        onClick={() => todoItem.toggleCompleted()}
      >
        {text}
      </div>
      <button onClick={() => store.removeTodo(id)}>x</button>
    </div>
  );
});
export default TodoItem;
