import { useContext } from 'react';

import { TodosContext } from '../App';
import { FILTERS } from '../utils/constants';

import Todo from './Todo';
import Filters from './Filters';

const Todos = () => {
  const { todos, filter } = useContext(TodosContext);

  return (
    <div className="todos">
      <ul>
        {todos.filter(FILTERS[filter]).map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <Filters />
    </div>
  );
};

export default Todos;
