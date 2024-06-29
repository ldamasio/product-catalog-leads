'use client';

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoTres = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, step3: e.target.value }));
  };

  const handleNext = () => {
    router.push('/form/PassoQuatro');
  };

  const handleBack = () => {
    router.push('/form/PassoDois');
  };

  return (
    <div className='formulario'>
      <h1>Passo 3: Detalhes Pessoais</h1>
      <div className='formulario-container'>
        <input type="text" value={formState.step3} onChange={handleChange} />
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

export default PassoTres;

