import * as React from 'react';
import Section from './Section';

interface EnergiaRenovavelProps {
}

const EnergiaRenovavel: React.FC<EnergiaRenovavelProps> = () => {
  return (
    <Section
      title="Financiar Energia Renovável"
      description="O futuro é sustentabilidade. Com o crédito energia renovável, você ajuda o meio ambiente e as gerações futuras."
      imageUrl="energia-renovavel.png"
      clipPath=""
    />
  );
};

export default EnergiaRenovavel;


