import React, { useState } from 'react';
import axios from 'axios';

const StepFour: React.FC<{ isChecked: boolean; setIsChecked: (value: boolean) => void }> = ({ isChecked, setIsChecked }) => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked); // Inverte o estado do checkbox
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/register/', formData);
      // Manipule a resposta aqui (por exemplo, exiba uma mensagem de sucesso)
      console.log('Resposta da API:', response.data);
    } catch (error) {
      // Trate erros aqui (por exemplo, exiba uma mensagem de erro)
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className='formulario'>
      <h1>Passo 4: Aceite dos termos e envio dos dados</h1>
      <div className='container u-full-width'>
        <div className='container'>
          <form className='row'>
            <div className='ten columns terms'>
              <span>Ao clicar em 'Aceito' eu concordo que:</span>
              <ul className='list-disc'>
                <li>
                  Eu li e concordo com os <a href='#'>Termos de Uso</a>
                </li>
                <li>
                  Eu li e aceitei a <a href='#'>Política de Privacidade</a>
                </li>
              </ul>
              <span className='checkbox-container'>
                <div className='checkbox-text' onClick={handleCheckboxClick}>
                  Aceito
                </div>
                <div className='checkbox-container-input-div'>
                  <input
                    className='checkbox-container-input'
                    type='checkbox'
                    autoFocus
                    checked={isChecked} // Define o estado inicial do checkbox
                    onChange={handleCheckboxClick} // Atualiza o estado do checkbox ao clicar
                  />
                </div>
              </span>
              <div className='formulario-submit-container'>
                <button>Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
