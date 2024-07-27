'use client';

import axios, { AxiosError } from 'axios';
import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface PostBody {
  username: string;
  email: string;
  password: string;
  is_parceiro: boolean;
  detalhes: {
    parceiroFullname: string;
    parceiroEmail: string;
    parceiroCpfCnpj: string;
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
    residencia_estado: string;
    residencial_cidade: string;
    classe_profissional: string;
    profissao: string;
    valor_patrimonio: number;
    pep: boolean;
    fatca: boolean;
    telefones_adicionais: string[];
    telefone_comercial: string;
    nome_referencia: string;
    telefone_referencia: string;
    autonomo: boolean;
    nome_referencia_comercial: string;
    telefone_referencia_comercial: string;
    valor_financiamento: number;
    marca_veiculo: string;
    modelo_veiculo: string;
    ano_fabricacao_veiculo: string;
    placa_veiculo: string;
  };
}

const PassoQuatro = () => {

  const router = useRouter();
  const { formState, setFormState } = useFormContext();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
        parceiroCpfCnpj: formState.parceiroCpfCnpj,
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
        telefone_comercial: formState.telefoneComercial,
        nome_referencia: formState.nomeReferencia,
        telefone_referencia: formState.telefoneReferencia,
        autonomo: formState.isAutonomo,
        nome_referencia_comercial: formState.nomeReferenciaComercial,
        telefone_referencia_comercial: formState.telefoneReferenciaComercial,
        valor_financiamento: formState.valorFinanciamento,
        marca_veiculo: formState.marcaVeiculo,
        modelo_veiculo: formState.modeloVeiculo,
        ano_fabricacao_veiculo: formState.anoFabricacaoVeiculo,
        placa_veiculo: formState.placaVeiculo
      }      
    };

    console.log('User registered successfully:', postBody);
    
    try {
      const response = await axios.post(
        'https://backend.cromofinanciamentos.com.br/api/register/',
        postBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('User registered successfully:', response.data);
      
      if (response.status === 201 || response.status === 200) {
        console.log('Form submitted successfully:', response.data);
        // router.push('/obrigado');
        setIsSubmitted(true);
      } else {
        console.error('Error submitting form:', response);
        // Display error message to the user (optional)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Log the detailed validation errors from the server
        console.error('Validation errors:', error.response?.data);
        console.error('Error status:', error.response?.status);
        console.error('Error headers:', error.response?.headers);
      } else if (error instanceof Error) {
        // Log other errors
        console.error('Error message:', error.message);
      } else {
        // Log unknown errors
        console.error('Unknown error:', error);
      }
      console.error('Error config:', error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      router.push('/obrigado');
    }
  }, [isSubmitted, router]);

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
