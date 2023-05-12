import { useContext } from 'react';

import { TodosContext } from '../App';
import { FILTERS } from '../utils/constants';

import Todo from './Todo';

const Todos = () => {
  const { todos, filter, clearTodos } = useContext(TodosContext);

  return (
    <ul className="todos">
      {todos.filter(FILTERS[filter]).map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <li className="todo">
        <span className="actions__count">
          {todos.filter(FILTERS['Active']).length} item(s) left
        </span>
        <button className="actions__clear" onClick={clearTodos}>
          Clear Completed
        </button>
      </li>
    </ul>
  );
};

export default Todos;
