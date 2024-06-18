import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
    label: string;
    icon: any;
    onClick: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
    return (
      <button className="button" onClick={onClick}>
        <FontAwesomeIcon icon={icon} className="icon" />
        <span className="label">{label}</span>
      </button>
    );
  };

  export default Button;