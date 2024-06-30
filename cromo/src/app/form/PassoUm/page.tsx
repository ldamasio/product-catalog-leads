'use client';

import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoUm: React.FC = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNext = () => {
    router.push('/form/PassoDois');
  };

  return (
    <div className='formulario'>
      <div className='formulario-container'>
        <h1>Passo 1: Seu Perfil</h1>
        <label htmlFor="fullname">
          Nome Completo:
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder=""
            value={formState.fullname}
            onChange={handleChange}
            autoFocus
            required
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            id="email"
            name="email"
            placeholder=""
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="dataNasc">
          Data de Nascimento:
          <input
            type='date'
            id="dataNasc"
            name="dataNasc"
            placeholder="Data de Nascimento"
            value={formState.dataNasc}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="estadoCivil">
          Estado Civil:
          <select
            name="estadoCivil"
            id="estadoCivil"
            value={formState.estadoCivil}
            onChange={handleChange}
            required
          >
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
            <option value='viuvo'>Viúvo</option>
            <option value='separado'>Separado</option>
          </select>
        </label>
        <label htmlFor="rgNumero">
          RG:
          <input
            type='text'
            id="rgNumero"
            name="rgNumero"
            placeholder="000.000.000-00"
            value={formState.rgNumero}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="rgOrgexp">
          Orgão Expedidor do RG:
          <input
            type='text'
            id="rgOrgexp"
            name="rgOrgexp"
            placeholder="SSP (ou outro órgão) e Estado"
            value={formState.rgOrgexp}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            type='text'
            id="cpf"
            name="cpf"
            placeholder="000.000.000-00"
            value={formState.cpf}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="celular">
          Tel Celular:
          <input
            type='tel'
            id="celular"
            name="celular"
            placeholder="(00) 00000-0000"
            value={formState.celular}
            onChange={handleChange}
            required
          />
        </label>
        <div className='formulario-buttons-container'>
          <div className='formulario-button-next'>
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassoUm;