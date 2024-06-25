import * as React from 'react';
import Section from '../Section';

interface LanchaProps {
}

const Lancha: React.FC<LanchaProps> = () => {
  return (
    <Section
      title="Financiar uma Embarcação"
      description="Realize o sonho de ter seu barco agora mesmo! Financiamento de embarcações com taxas imperdíveis. Realize passeios inesquecíveis com amigos e familiares. Pratique seus esportes aquáticos favoritos."
      imageUrl="lancha.png"
    />
  );
};

export default Lancha;
