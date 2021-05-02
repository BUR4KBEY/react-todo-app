const Button = ({ text, color, onClick }: {
    text: string,
    color: string,
    onClick: () => void;
}) => (<button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>);

export default Button;