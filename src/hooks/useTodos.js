import { useState } from 'react';

import { FILTERS } from '../utils/constants';

export const useTodos = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Work out', completed: true },
    { id: 2, text: 'Eat', completed: false },
    { id: 3, text: 'Sleep', completed: false },
    { id: 4, text: 'Enjoy life!', completed: false },
  ]);

  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((current) => [...current, newTodo]);
    setFilter('All');
  };

  const toggleTodo = (id, completed) => {
    setTodos((current) =>
      current.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos((current) => current.filter(FILTERS['Active']));
    setFilter('All');
  };

  const filterTodos = (e) => setFilter(e.target.textContent);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearTodos,
    filter,
    filterTodos,
  };
};
