import './button.styles.css';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  title,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='custom-button'
    >
      {title}
    </button> 
  );
}