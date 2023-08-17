import TodoItem from './TodoItem';

const TodoGroup = ({ todoList, setTodoList }) => {
  return (
    <>
      {todoList.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </>
  );
};
export default TodoGroup;
