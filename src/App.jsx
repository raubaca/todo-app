import sunIcon from './assets/icon-sun.svg';
import moonIcon from './assets/icon-moon.svg';
import deleteIcon from './assets/icon-cross.svg';
import { useEffect, useRef, useState } from 'react';

const FILTERS = {
  All: () => true,
  Active: (item) => !item.completed,
  Completed: (item) => item.completed,
};

function App() {
  const [theme, setTheme] = useState('dark');

  const [todos, setTodos] = useState([
    { id: 1, text: 'Work out', completed: true },
    { id: 2, text: 'Eat', completed: false },
    { id: 3, text: 'Sleep', completed: false },
    { id: 4, text: 'Enjoy life!', completed: false },
  ]);

  const inputRef = useRef('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    const text = inputRef.current?.value;
    if (text.trim() === '') return;
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((current) => [...current, newTodo]);
    setFilter('All');
    inputRef.current.value = '';
  };

  const toggleTodoHandler = (id, completed) => {
    setTodos((current) =>
      current.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  };

  const deleteTodoHandler = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const deleteCompletedHandler = () => {
    setTodos((current) => current.filter(FILTERS['Active']));
    setFilter('All');
  };

  const filterHandler = (e) => setFilter(e.target.textContent);

  let isDark = theme === 'dark';

  const toggleThemeHandler = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <>
      <header className="header">
        <h1 className="title">TODO</h1>
        <button
          title={`${isDark ? 'Light' : 'Dark'} mode`}
          className="toggle-theme-button"
          onClick={toggleThemeHandler}
        >
          <img
            src={isDark ? sunIcon : moonIcon}
            alt="Sun icon"
            width={26}
            height={26}
          />
        </button>
      </header>
      <main>
        <form onSubmit={addTodoHandler} className="new-todo">
          <input
            ref={inputRef}
            type="text"
            name="text"
            className="new-todo__input"
            autoComplete="off"
            placeholder="Create a new todo..."
          />
        </form>
        <div className="todos">
          <ul>
            {todos.filter(FILTERS[filter]).map((todo) => (
              <li key={todo.id} className="todo">
                <input
                  type="checkbox"
                  name={todo.id}
                  id={todo.id}
                  className="todo__check"
                  checked={todo.completed}
                  onChange={(e) => toggleTodoHandler(todo.id, e.target.checked)}
                />
                <label htmlFor={todo.id} className="todo__text">
                  {todo.text}
                </label>
                <button
                  title="Delete todo"
                  className="todo__delete"
                  onClick={() => deleteTodoHandler(todo.id)}
                >
                  <img src={deleteIcon} alt="Delete icon" />
                </button>
              </li>
            ))}
          </ul>
          <div className="actions">
            <span className="actions__count">
              {todos.filter(FILTERS['Active']).length} item(s) left
            </span>
            {Object.keys(FILTERS).map((filterKey) => (
              <button
                key={filterKey}
                className="actions__filter"
                onClick={filterHandler}
                aria-pressed={filter === filterKey}
              >
                {filterKey}
              </button>
            ))}
            <button className="actions__clear" onClick={deleteCompletedHandler}>
              Clear Completed
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
