'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

interface PostBody {
  username: string;
  email: string;
  password: string;
  is_parceiro: boolean;
  detalhes: {
    parceiroFullname: string;
    parceiroEmail: string;
    nome: string;
    datanasc: string;
    estado_civil: string;
    rg_numero: string;
    rg_orgexp: string;
    cpf: string;
    celular: string;
    renda: number;
    mae: string;
    pai: string;
    nacionalidade: string;
    classe_profissional: string;
    profissao: string;
    valor_patrimonio: number;
    pep: boolean;
    fatca: boolean;
    telefones_adicionais: string[];
    nome_referencia: string;
    telefone_referencia: string;
    residencia_estado: string;
    residencial_cidade: string;
  };
}

const PassoQuatro = () => {

  const router = useRouter();

  const { formState, setFormState } = useFormContext();

  const handleCheckboxClick = () => {
    setFormState((prevState) => ({
      ...prevState,
      isChecked: !prevState.isChecked,
    }));
  };

  const handleSubmit = async () => {

    const postBody: PostBody = { 
      username: formState.email,
      email: formState.email,
      password: 'default',
      is_parceiro: formState.isParceiro,
      detalhes: {
        parceiroFullname: formState.parceiroFullname,
        parceiroEmail: formState.parceiroEmail,
        nome: formState.fullname,
        datanasc: formState.dataNasc,
        estado_civil: formState.estadoCivil,
        rg_numero: formState.rgNumero,
        rg_orgexp: formState.rgOrgexp,
        cpf: formState.cpf,
        celular: formState.celular,
        renda: formState.renda,
        mae: formState.mae,
        pai: formState.pai,
        nacionalidade: formState.nacionalidade,
        residencia_estado: formState.residenciaEstado,
        residencial_cidade: formState.residenciaCidade,
        classe_profissional: formState.classeProfissional,
        profissao: formState.profissao,
        valor_patrimonio: formState.valorPatrimonio,
        pep: formState.pep,
        fatca: formState.fatca,
        telefones_adicionais: formState.telefonesAdicionais,
        nome_referencia: formState.nomeReferencia,
        telefone_referencia: formState.telefoneReferencia,
      }      
    };

    try {
      const response = await axios.post(
        'http://localhost:8000/api/register/',
        postBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log('Form submitted successfully:', response.data);
        router.push('/obrigado');
      } else {
        console.error('Error submitting form:', response);
        // Display error message to the user (optional)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display error message to the user (optional)
    }
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
            className={`formulario-button-next formulario-button-submit ${formState.isChecked ? 'enabled' : ''
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
