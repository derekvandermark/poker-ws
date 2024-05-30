import './button.styles.css';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  title,
  onClick,
  disabled,
  className
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${disabled && 'disabled'} ${className}`}
    >
      {title}
    </button> 
  );
}