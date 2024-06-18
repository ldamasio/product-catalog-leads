import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-direitos">
        <p className='footer-cromo whitespace-nowrap'>&copy; 2024 Cromo Financiamentos.</p>
        <p className='footer-direitos'>Todos os direitos reservados.</p>
      </div>

      <div className="footer-contatos">
        <p className="pt-3" >
          <FontAwesomeIcon icon={faPhone} className="footer-photo-icone"/>0800 591 8723
        </p>
        <p className="footer-local">
          Rua Vinte e Quatro de Maio, 188.
          Andar 5.
          Centro.
          01041-903.
          São Paulo, SP.
        </p>
      </div>

    </footer>
  );
};

export default Footer;