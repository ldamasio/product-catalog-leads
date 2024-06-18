"use client;"

import React from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import MultiStep from 'react-multistep'
import StepOne from '@/components/Steps/StepOne';
import StepTwo from '@/components/Steps/StepTwo'
import StepThree from '@/components/Steps/StepThree'
import StepFour from '@/components/Steps/StepFour'

const steps = [
  { name: 'Perfil', component: <StepOne /> },
  { name: 'Dados Pessoais', component: <StepTwo /> },
  { name: 'Endereço', component: <StepThree /> },
  { name: 'Documentos', component: <StepFour /> },
];

const Formulario: React.FC = () => {

  const router = useRouter();
  const { tipo } = router.query;

  const ehParceiro = typeof tipo === 'string' ? tipo : '';

  if (ehParceiro === null) {
    return <p>Carregando...</p>;
  }

  return (
    <Layout>
      <div className='formulario-container'>
        <p>Eu sou {ehParceiro}</p>
        <MultiStep
          steps={steps}
        />
      </div>
    </Layout>
  )
};

export default Formulario;
