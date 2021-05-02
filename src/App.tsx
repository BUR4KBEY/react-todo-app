import Header from './components/Header';
import Todos from './components/Todos';
import NoTodo from './components/NoTodo';
import TodoForm from './components/TodoForm';

import TodoService from './services/TodoService';

const App = () => {
  const todoService = TodoService();

  return (
    <div className="container">
      <Header title="Todo App" todoService={todoService} onClick={todoService.changeAddFormStatus} />
      {todoService.addFormStatus && <TodoForm onAdd={todoService.add} />}
      {todoService.todos.length > 0 ? <Todos todos={todoService.todos} onDelete={todoService.remove} onFinished={todoService.finish} /> : <NoTodo />}
    </div>
  );
}

export default App;
