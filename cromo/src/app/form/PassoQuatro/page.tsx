'use client';

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoQuatro = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, step4: e.target.value }));
  };

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
      <h1>Passo 4: Aceite dos termos</h1>
      <div className='formulario-container'>
        <input type="text" value={formState.step4} onChange={handleChange} />
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
