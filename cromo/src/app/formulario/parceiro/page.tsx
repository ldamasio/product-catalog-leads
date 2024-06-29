'use client'

import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const Parceiro: React.FC = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  useEffect(() => {
    setFormState(prevState => ({ ...prevState, isParceiro: true }));
    router.push('/form/PassoUm');
  }, [setFormState]);

  return (
    <div></div>
  );
};

export default Parceiro;
