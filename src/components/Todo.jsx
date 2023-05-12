import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { TodosContext } from '../App';

import deleteIcon from '../assets/icon-cross.svg';

const Todo = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodosContext);

  return (
    <li className="todo">
      <input
        type="checkbox"
        id={todo.id}
        className="todo__check"
        checked={todo.completed}
        onChange={(e) => toggleTodo(todo.id, e.target.checked)}
      />
      <label htmlFor={todo.id} className="todo__text">
        {todo.text}
      </label>
      <button
        title="Delete todo"
        className="todo__delete"
        onClick={() => deleteTodo(todo.id)}
      >
        <img src={deleteIcon} alt="Delete icon" />
      </button>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
};

export default Todo;
