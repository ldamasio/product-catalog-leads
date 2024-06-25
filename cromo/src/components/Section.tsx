import * as React from 'react';
import Link from 'next/link';

interface SectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Section: React.FC<SectionProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="sectionContainer">
      <div className="sectionContent">
        <div className="sectionImage">
          <img src={imageUrl} alt={title} width="100%" />
        </div>
        <div className="sectionText">
          <h1 className="sectionTitle">{title}</h1>
          <p className="sectionDescription">{description}</p>
          <div className="sectionActions">
            <Link
              href="cadastrar"
              className="sectionFinancingButton"
            >
              Obter Financiamento
            </Link>
            <Link href="saibamais" className="sectionSaibaMaisLink">
              Saiba mais <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
