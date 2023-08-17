import { useState } from 'react';

const TodoGenerator = ({ setTodoList, todoList }) => {
  const [inputText, setInputText] = useState('');

  const handleAddList = () => {
    const newTodoItem = {
      id: Date.now(),
      text: inputText,
      done: false,
    };
    setTodoList([...todoList, newTodoItem]);
    setInputText('');
  };

  return (
    <div className='todo-generator'>
      <input
        value={inputText}
        type='text'
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button className='add-button' onClick={() => handleAddList()}>
        Add
      </button>
    </div>
  );
};
export default TodoGenerator;
