import { observer } from 'mobx-react';
import { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoStoreContext } from '../store';

const TodoGroup = observer(() => {
  const store = useContext(TodoStoreContext);
  const todoList = store.todos;

  return (
    <>
      {todoList.map((todoItem) => {
        return <TodoItem key={todoItem.id} todoItem={todoItem} />;
      })}
    </>
  );
});
export default TodoGroup;
