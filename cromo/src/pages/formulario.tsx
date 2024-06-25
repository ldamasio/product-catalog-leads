"use client;"

import React from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import MultiStep from 'react-multistep'
import StepOne from '@/components/Steps/StepOne';
import StepTwo from '@/components/Steps/StepTwo'
import StepThree from '@/components/Steps/StepThree'
import StepFour from '@/components/Steps/StepFour'

interface IBody {
  isPartner: boolean;
  name: string;
  email: string;
  isChecked: boolean;
}

  const handleSubmit = async () => {
    try {
      console.log('Formulario submetido --->>> Pedro e gabigol ');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

const Formulario: React.FC<IBody> = () => {
  
  const steps = [
    { name: 'Dados Pessoais', component: <StepOne /> },
    { name: 'Informações Complementares', component: <StepTwo /> },
    { name: 'Endereço', component: <StepThree /> },
    { name: 'Aceite', component: <StepFour /> },
  ];

  const router = useRouter();
  const { tipo } = router.query;

  const isPartner = typeof tipo === 'string' ? tipo : '';

  if (isPartner === null) {
    return <p>Carregando...</p>;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log('Updated body:', steps);
  };

  return (
    <Layout>
      <div className='formulario-container'>
        <p className='formulario-tipo'>Cadastro de {isPartner}</p>
        <MultiStep
          steps={steps}
          activeStep={0}
          direction='row'
          stepCustomStyle={{ backgroundColor: '#333333' }}
          prevButton={{ title: 'Anterior', style: { marginRight: '1em', backgroundColor: '#333333' } }}
          nextButton={{ title: 'Próximo', style: { marginLeft: '1em', backgroundColor: '#333333' } }}
          showNavigation={true}
        >
        </MultiStep>
      </div>
    </Layout>
  )
};

export default Formulario;
