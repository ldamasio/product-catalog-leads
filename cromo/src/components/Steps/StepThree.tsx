import React from 'react';

const StepThree: React.FC = () => {

  return (
    <div>
      <div className='formulario'>
      <h1>Passo 3: Endereço</h1>
        <div className='container u-full-width'>
          {/* Referência */}
          <div className='row'>
            <div className='formulario_input'>
              <label htmlFor="nome_referencia">Nome da Referência</label>
              <input
                id="nome_referencia"
                className='u-full-width'
                placeholder='Nome da Referência'
                type='text'
                // value={state.nome_referencia}  // Update with state variable
                required
              />
            </div>
          </div>

          {/* Telefone da Referência */}
          <div className='row'>
            <div className='formulario_input'>
              <label htmlFor="telefone_referencia">Telefone da Referência</label>
              <input
                id="telefone_referencia"
                className='u-full-width'
                placeholder='(XX) X XXXX-XXXX'
                type='tel'  // Define o tipo de input como telefone
                // value={state.telefone_referencia}  // Update with state variable
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
