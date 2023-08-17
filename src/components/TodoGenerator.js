import { useState, useContext } from 'react';
import { observer } from 'mobx-react';
import { TodoStoreContext } from '../store';

const TodoGenerator = observer(() => {
  const [inputText, setInputText] = useState('');
  const store = useContext(TodoStoreContext);

  const handleAddList = () => {
    if (inputText.trim()) {
      store.addTodo(inputText.trim());
      setInputText('');
    }
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
});
export default TodoGenerator;
