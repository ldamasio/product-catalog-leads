"use client;"

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import MultiStep from 'react-multistep'
import StepOne from '@/components/Steps/StepOne';
import StepTwo from '@/components/Steps/StepTwo'
import StepThree from '@/components/Steps/StepThree'
import StepFour from '@/components/Steps/StepFour'

const Formulario: React.FC = () => {
  
  const [isChecked, setIsChecked] = useState(0);
  
  const steps = [
    { name: 'Dados Pessoais', component: <StepOne /> },
    { name: 'Informações Complementares', component: <StepTwo /> },
    { name: 'Endereço', component: <StepThree /> },
    { name: 'Aceite', component: <StepFour isChecked={isChecked} setIsChecked={setIsChecked}/> },
  ];
  
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const router = useRouter();
  const { tipo } = router.query;

  const ehParceiro = typeof tipo === 'string' ? tipo : '';

  if (ehParceiro === null) {
    return <p>Carregando...</p>;
  }

  return (
    <Layout>
      <div className='formulario-container'>
        <p className='formulario-tipo'>Cadastro de {ehParceiro}</p>
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
