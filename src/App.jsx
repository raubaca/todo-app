import { useTodos } from './hooks/useTodos';

import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos';
import { createContext } from 'react';

export const TodosContext = createContext(null);

function App() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearTodos,
    filter,
    filterTodos,
  } = useTodos();
  return (
    <>
      <Header />
      <main>
        <TodosContext.Provider
          value={{
            todos,
            addTodo,
            deleteTodo,
            toggleTodo,
            clearTodos,
            filter,
            filterTodos,
          }}
        >
          <Form />
          <Todos />
        </TodosContext.Provider>
      </main>
    </>
  );
}

export default App;
