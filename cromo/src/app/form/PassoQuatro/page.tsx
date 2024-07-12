'use client';

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoQuatro = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleCheckboxClick = () => {
    setFormState((prevState) => ({
      ...prevState,
      isChecked: !prevState.isChecked,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formState);
    console.log(formState);
    router.push('/obrigado');
  };

  const handleBack = () => {
    router.push('/form/PassoTres');
  };

  return (
    <div className='formulario'>
      <div className='formulario-container'>
        <h1>Passo 4: Aceite dos termos</h1>

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
              checked={formState.isChecked}
              onChange={handleCheckboxClick}
            />
          </div>
        </span>

        <div className='formulario-buttons-container'>
          <div className='formulario-button-prev'>
            <button onClick={handleBack}>Voltar</button>
          </div>
          <div 
            className={`formulario-button-next formulario-button-submit ${
              formState.isChecked ? 'enabled' : ''
            }`}
          >
            <button disabled={!formState.isChecked} onClick={handleSubmit}>
              Enviar agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassoQuatro;
