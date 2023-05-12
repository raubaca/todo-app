import { createContext } from 'react';

import { useTodos } from './hooks/useTodos';

import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos';
import Actions from './components/Actions';

export const TodosContext = createContext(null);

function App() {
  const todos = useTodos();
  return (
    <>
      <Header />
      <main>
        <TodosContext.Provider value={{ ...todos }}>
          <Form />
          <Todos />
          <Actions />
        </TodosContext.Provider>
      </main>
    </>
  );
}

export default App;
