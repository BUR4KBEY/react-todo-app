import { FaCheck, FaTimes } from 'react-icons/fa';
import { ITodo } from '../utils/interfaces';

const Todo = ({ data, onDelete, onFinished }: {
    data: ITodo,
    onDelete: (id: number) => void;
    onFinished: (id: number) => void;
}) => (
    <div className={`noselect todo${data.completed ? " finished" : ""}`}>
        <h3>{data.text}</h3>
        <p>{data.description}</p>
        <div>
            {!data.completed && <FaCheck onClick={() => onFinished(data.id)} style={{ color: 'yellowgreen' }} />}
            <FaTimes onClick={() => onDelete(data.id)} style={{ color: '#FF0042' }} />
        </div>
    </div>
);

export default Todo;