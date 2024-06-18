import React from 'react';

const StepThree: React.FC = () => {

  return (

    <div className='container'>
      <form className='row'>
        <div className='ten columns terms'>
          <span>Ao clicar em 'Aceito' eu concordo que:</span>
          <ul className='docs-terms'>
            <li>
              Eu li e concordo com os <a href='#'>Termos de Uso</a>
            </li>
            <li>
              Eu li e aceitei a <a href='#'>Política de Privacidade</a>
            </li>
          </ul>
          <span>
            <label>
              Aceito {': '}
              <input
                type='checkbox'
                autoFocus
              />
            </label>
          </span>
          <button style={{ float: 'right' }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
