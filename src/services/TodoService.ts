import { ITodo, ITodoService } from '../utils/interfaces';
import { useState } from 'react';

const TodoService = (): ITodoService => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Finish the project", description: "helo", completed: false },
        { id: 2, text: "Add new todos", description: "sjsjsjjs", completed: false },
        { id: 3, text: "Add the button", description: "lmao", completed: true }
    ] as ITodo[]);

    const [addFormStatus, setAddFormStatus] = useState(false);

    const add = (text: string, description: string) => setTodos([...todos, { id: Math.floor(Math.random() * 100000) + 1, text, description, completed: false }]);
    const remove = (id: number) => setTodos(todos.filter(todo => todo.id !== id));
    const finish = (id: number) => setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo))

    const changeAddFormStatus = () => setAddFormStatus(!addFormStatus);

    return { todos, addFormStatus, add, remove, finish, changeAddFormStatus };
}

export default TodoService;