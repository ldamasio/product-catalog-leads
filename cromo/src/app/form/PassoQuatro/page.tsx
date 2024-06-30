'use client';

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoQuatro = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleSubmit = () => {
    console.log('Form submitted:', formState);
    // Aqui você pode adicionar a lógica de submissão do formulário
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
          <div className='checkbox-text'
          // onClick={handleCheckboxClick}
          >
            Aceito
          </div>
          <div className='checkbox-container-input-div'>
            <input
              className='checkbox-container-input'
              type='checkbox'
              autoFocus
            // checked={isChecked} // Define o estado inicial do checkbox
            // onChange={handleCheckboxClick} // Atualiza o estado do checkbox ao clicar
            />
          </div>
        </span>


        <div className='formulario-buttons-container'>
          <div className='formulario-button-prev'>
            <button onClick={handleBack}>Voltar</button>
          </div>
          <div className='formulario-button-next'>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassoQuatro;
