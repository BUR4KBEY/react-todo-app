import Button from './Button';
import { ITodoService } from '../utils/interfaces';

const Header = ({ todoService, title, onClick }: {
    todoService: ITodoService;
    title: string,
    onClick: () => void;
}) => (
    <header className="header">
        <h1>{title}</h1>
        <Button text={todoService.addFormStatus ? "Close" : "Add"} color={todoService.addFormStatus ? "#FF0042" : "#4BB862"} onClick={onClick} />
    </header>
);

export default Header;