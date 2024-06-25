import * as React from 'react';
import Section from '../Section';

interface ImovelProps {
}

const Imovel: React.FC<ImovelProps> = () => {
  return (
    <Section
      title="Financiar um Imóvel"
      description="Seu Imóvel está te esperando aqui. Descubra como adquirir o Imóvel dos seus sonhos com parcelas que cabem no seu bolso."
      imageUrl="imovel.png"
    />
  );
};

export default Imovel;
