import { useContext } from 'react';

import { TodosContext } from '../App';
import { FILTERS, FILTER_LABELS } from '../utils/constants';

const Filters = () => {
  const { todos, clearTodos, filter, filterTodos } = useContext(TodosContext);

  return (
    <div className="actions">
      <span className="actions__count">
        {todos.filter(FILTERS['Active']).length} item(s) left
      </span>
      {FILTER_LABELS.map((filterKey) => (
        <button
          key={filterKey}
          className="actions__filter"
          onClick={filterTodos}
          aria-pressed={filter === filterKey}
        >
          {filterKey}
        </button>
      ))}
      <button className="actions__clear" onClick={clearTodos}>
        Clear Completed
      </button>
    </div>
  );
};

export default Filters;
