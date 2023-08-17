const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const { text, id, done } = todoItem;

  const deleteItem = () => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const toggleItem = () => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className='todo-item-container'>
      <div
        className={done ? 'todo-item todo-done' : 'todo-item'}
        onClick={() => toggleItem()}
      >
        {text}
      </div>
      <button onClick={() => deleteItem()}>x</button>
    </div>
  );
};
export default TodoItem;
