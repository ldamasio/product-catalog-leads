'use client';

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoTres = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNext = () => {
    router.push('/form/PassoQuatro');
  };

  const handleBack = () => {
    router.push('/form/PassoDois');
  };

  return (
    <div className='formulario'>
      <div className='formulario-container'>
        <h1>Passo 3: Detalhes Pessoais</h1>
        <label htmlFor="nomeReferencia">
          Nome da Referência:
          <input
            id="nomeReferencia"
            name="nomeReferencia"
            type="text"
            value={formState.nomeReferencia}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="telefoneReferencia">
          Telefone da Referência:
          <input
            id="telefoneReferencia"
            name="telefoneReferencia"
            placeholder="(XX) X XXXX-XXXX"
            type="tel"
            value={formState.telefoneReferencia}
            onChange={handleChange}
            required
          />
        </label>

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

