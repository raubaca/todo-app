import { useEffect, useState } from 'react';

import { FILTERS } from '../utils/constants';

export const useTodos = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('TODOS')) || []
  );

  useEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos));
  }, [todos]);

  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    setFilter('All');
  };

  const toggleTodo = (id, completed) =>
    setTodos((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );

  const deleteTodo = (id) =>
    setTodos((current) => current.filter((todo) => todo.id !== id));

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
