'use client'

import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContext';
import { useRouter } from 'next/navigation';

const Usuario: React.FC = () => {
  const { formState, setFormState } = useFormContext();
  const router = useRouter();

  useEffect(() => {
    setFormState(prevState => ({ ...prevState, isParceiro: false }));
    router.push('/form/PassoUm');
  }, [setFormState]);

  return (
    <div></div>
  );
};

export default Usuario;
