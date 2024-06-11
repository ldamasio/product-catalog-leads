import * as React from 'react';
import Section from './Section';

interface LanchaProps {
}

const Lancha: React.FC<LanchaProps> = () => {
  return (
    <Section
      title="Financiar uma Lancha"
      description="Realize o sonho de ter seu barco agora mesmo! Financiamento de lanchas e embarcações com taxas imperdíveis. Realize passeios inesquecíveis com amigos e familiares. Pratique seus esportes aquáticos favoritos."
      imageUrl="lancha.png"
      clipPath=""
    />
  );
};

export default Lancha;
