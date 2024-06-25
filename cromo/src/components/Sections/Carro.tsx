import * as React from 'react';
import Section from '../Section';

interface CarroProps {
}

const Carro: React.FC<CarroProps> = () => {
  return (
    <Section
      title="Financiar um Carro"
      description="Seu carro está te esperando aqui. Descubra como adquirir o carro dos seus sonhos com parcelas que cabem no seu bolso."
      imageUrl="hb20.jpg"
    />
  );
};

export default Carro;
