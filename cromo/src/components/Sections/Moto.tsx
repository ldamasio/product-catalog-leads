import * as React from 'react';
import Section from '../Section';

interface MotoProps {
}

const Moto: React.FC<MotoProps> = () => {
  return (
    <Section
      title="Financiar uma Moto"
      description="Sua Moto dos Sonhos te espera por aqui!Seu Moto está te esperando aqui. Realize o seu desejo de liberdade e aventura com parcelas que cabem no seu bolso."
      imageUrl="honda160.png"
    />
  );
};

export default Moto;
