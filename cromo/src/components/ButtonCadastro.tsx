import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonCadastroProps {
    label: string;
    icon: any;
    onClick: () => void;
  }
  
  const ButtonCadastro: React.FC<ButtonCadastroProps> = ({ label, icon, onClick }) => {
    return (
      <button className="button-cadastro" onClick={onClick}>
        <FontAwesomeIcon icon={icon} className="button-cadastro-icon" />
        <span className="label-cadastro">{label}</span>
      </button>
    );
  };

  export default ButtonCadastro;