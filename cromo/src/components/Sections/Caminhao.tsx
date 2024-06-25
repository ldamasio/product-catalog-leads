import * as React from 'react';
import Section from '../Section';

interface CaminhaoProps {
}

const Caminhao: React.FC<CaminhaoProps> = () => {
  return (
    <Section
      title="Financiar um Caminhão"
      description="Vem adquirir seu 1º caminhão! Transformamos o seu sonho em realidade, aprovando crédito rápido para 1º caminhão e até 100% liberado para 2º caminhão. Trabalhamos com refinanciamento. Parcelas que cabem no seu orçamento. Comece agora a realizar seu sonho."
      imageUrl="scania.png"
    />
  );
};

export default Caminhao;
