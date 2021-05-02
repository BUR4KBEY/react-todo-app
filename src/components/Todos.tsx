import Todo from './Todo';
import { ITodo } from '../utils/interfaces';

const Todos = ({ todos, onDelete, onFinished }: {
    todos: ITodo[];
    onDelete: (id: number) => void;
    onFinished: (id: number) => void;
}) => (
    <>
        {
            todos.map(todo => (<Todo key={todo.id} data={todo} onDelete={onDelete} onFinished={onFinished} />))
        }
    </>
);

export default Todos;