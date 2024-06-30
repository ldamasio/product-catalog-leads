'use client'

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoDois = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, celular: e.target.value }));
  };

  const handleNext = () => {
    router.push('/form/PassoTres');
  };

  const handleBack = () => {
    router.push('/form/PassoUm');
  };

  return (
    <div className='formulario'>
      <h1>Passo 2: Informações Complementares</h1>
      <div className='formulario-container'>
        <input type="text" value={formState.celular} onChange={handleChange} />

        <div className='formulario-buttons-container'>
          <div className='formulario-button-prev'>
            <button onClick={handleBack}>Voltar</button>
          </div>
          <div className='formulario-button-next'>
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassoDois;
