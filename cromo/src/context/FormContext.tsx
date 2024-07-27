'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface FormState {
  isParceiro: boolean;
  isParceiroTyping: boolean;
  parceiroFullname: string;
  parceiroEmail: string;
  parceiroCpfCnpj: string;
  fullname: string;
  email: string;
  dataNasc: string;
  estadoCivil: string;
  rgNumero: string;
  rgOrgexp: string;
  cpf: string;
  celular: string;
  renda: number;
  mae: string;
  pai: string;
  nacionalidade: string;
  residenciaEstado: string;
  residenciaCidade: string;
  classeProfissional: string;
  profissao: string;
  valorPatrimonio: number;
  pep: boolean;
  fatca: boolean;
  telefonesAdicionais: string[];
  telefoneComercial: string;
  nomeReferencia: string;
  telefoneReferencia: string;
  isAutonomo: boolean;
  nomeReferenciaComercial: string;
  telefoneReferenciaComercial: string;
  valorFinanciamento: number;
  marcaVeiculo: string;
  modeloVeiculo: string;
  anoFabricacaoVeiculo: string;
  placaVeiculo: string;
  isChecked: boolean;
}

interface FormContextProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, setFormState] = useState<FormState>({
    isParceiro: false,
    isParceiroTyping: false,
    parceiroFullname: '',
    parceiroEmail: '',
    parceiroCpfCnpj: '',
    fullname: '',
    email: '',
    dataNasc: '',
    estadoCivil: '',
    rgNumero: '',
    rgOrgexp: '',
    cpf: '',
    celular: '',
    renda: 0,
    mae: '',
    pai: '',
    nacionalidade: '',
    residenciaEstado: '',
    residenciaCidade: '',
    classeProfissional: '',
    profissao: '',
    valorPatrimonio: 0,
    pep: false,
    fatca: false,
    telefonesAdicionais: [],
    telefoneComercial: '',
    nomeReferencia: '',
    telefoneReferencia: '',
    isAutonomo: false,
    nomeReferenciaComercial: '',
    telefoneReferenciaComercial: '',
    valorFinanciamento: 0,
    marcaVeiculo: '',
    modeloVeiculo: '',
    anoFabricacaoVeiculo: '',
    placaVeiculo: '',
    isChecked: false,
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
