import { useContext, useRef } from 'react';
import { TodosContext } from '../App';

const Form = () => {
  const { addTodo } = useContext(TodosContext);

  const inputRef = useRef('');

  const submitHandler = (e) => {
    e.preventDefault();
    const text = inputRef.current?.value;
    if (text.trim() === '') return;
    addTodo(text);
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler} className="new-todo">
      <input
        ref={inputRef}
        type="text"
        name="text"
        className="new-todo__input"
        autoComplete="off"
        placeholder="Create a new todo..."
        aria-label="New todo"
      />
    </form>
  );
};

export default Form;
