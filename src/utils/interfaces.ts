export interface ITodo {
    id: number;
    text: string;
    description: string;
    completed: boolean;
}

// Same structure with "../services/TodoService"
export interface ITodoService {
    todos: ITodo[];
    addFormStatus: boolean;
    add: (text: string, description: string) => void;
    remove: (id: number) => void;
    finish: (id: number) => void;
    changeAddFormStatus: () => void;
}