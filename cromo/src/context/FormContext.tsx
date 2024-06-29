'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface FormState {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  isParceiro: boolean;
  fullname: string;
  email: string;
  estadoCivil: string;
  rgNumero: string;
  rgOrgexp: string;
  dataNasc: string;
  cpf: string;
  celular: string;
}

interface FormContextProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, setFormState] = useState<FormState>({
    step1: '',
    step2: '',
    step3: '',
    step4: '',
    isParceiro: false,
    fullname: '',
    email: '',
    estadoCivil: '',
    rgNumero: '',
    rgOrgexp: '',
    dataNasc: '',
    cpf: '',
    celular: '',
  });

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export default useFormContext;
