import * as React from 'react';

interface SectionProps {
  title: string;
  description: string;
  imageUrl: string;
  clipPath?: string;
}

const Section: React.FC<SectionProps> = ({ title, description, imageUrl, clipPath }) => {
  return (
    <div className="sectionContainer">
      <div className="sectionContent">
        <div className="sectionImage">
          <img src={imageUrl} alt={title} width="100%" style={clipPath ? { clipPath } : undefined} />
        </div>
        <div className="sectionText">
          <h1 className="sectionTitle">{title}</h1>
          <p className="sectionDescription">{description}</p>
          <div className="sectionActions">
            <a
              href="#"
              className="sectionFinancingButton"
            >
              Obter Financiamento
            </a>
            <a href="#" className="sectionSaibaMaisLink">
              Saiba mais <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;