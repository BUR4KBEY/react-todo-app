import { FormEvent, useState } from 'react';

const TodoForm = ({ onAdd }: {
    onAdd: (text: string, description: string) => void;
}) => {
    const [text, setText] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (!text || !desc) return alert("Please fill all the fields!");
        onAdd(text, desc);
        setText("");
        setDesc("");
    };

    return (
        <form className="todo-form" onSubmit={submit}>
            <div className="form-control">
                <label>Todo</label>
                <input type="text" placeholder="Name of the Todo" value={text} onChange={e => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="Description of the Todo" value={desc} onChange={e => setDesc(e.target.value)} />
            </div>

            <input className="btn btn-block" type="submit" value="Save Todo" />
        </form>
    );
}

export default TodoForm;