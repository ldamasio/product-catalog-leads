'use client'

import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const PassoUm: React.FC = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, step1: e.target.value }));
  };

  const handleNext = () => {
    router.push('/form/PassoDois');
  };

  function logState() {
    console.log(formState);
  }
  setTimeout(logState, 3000)

  return (
    <div className='formulario'>
      <h1>Passo 1: Seu Perfil</h1>
      <div className='formulario-container'>
        <input
          type="text"
          name="fullname"
          placeholder="Nome completo"
          value={formState.fullname}
          onChange={handleChange}
          autoFocus
          required
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={formState.email}
          onChange={handleChange}
          autoFocus
          required
        />
        <select
          value={formState.estadoCivil}
          required
        >
          <option value='solteiro'>Solteiro</option>
          <option value='casado'>Casado</option>
          <option value='divorciado'>Divorciado</option>
          <option value='viuvo'>Viúvo</option>
          <option value='separado'>Separado</option>
        </select>
        <input
          placeholder='RG: 000.000.000-00'
          type='text'
          value={formState.rgNumero}
          required
        />
        <input
          placeholder='SSP (ou outro órgão) e Estado'
          type='text'
          value={formState.rgOrgexp}
          required
        />
        <input
          placeholder='dd/mm/aaaa'
          type='date'
          value={formState.dataNasc}
          required
        />
        <input
          placeholder='CPF: 000.000.000-00'
          type='text'
          value={formState.cpf}
          required
        />
        <input
          placeholder='Tel Celular: (00) 00000-0000'
          type='tel'
          value={formState.celular}
          required
        />
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
