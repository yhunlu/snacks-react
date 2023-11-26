interface Props {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    // create button
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
