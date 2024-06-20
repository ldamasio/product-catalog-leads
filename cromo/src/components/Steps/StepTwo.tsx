import React from 'react';

const StepTwo: React.FC = () => {

  return (
    <div className='formulario'>
      <h1>Passo 2: Informações Complementares</h1>
      <div className='container u-full-width'>
        {/* Renda */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Renda Mensal</label>
            <input
              className='u-full-width'
              placeholder='Renda Mensal'
              type='number'  // Use number input for numeric values
              // value={state.renda}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* Mãe */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Nome da Mãe</label>
            <input
              className='u-full-width'
              placeholder='Nome da Mãe'
              type='text'
              // value={state.mae}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* Pai */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Nome do Pai</label>
            <input
              className='u-full-width'
              placeholder='Nome do Pai'
              type='text'
              // value={state.pai}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* Nacionalidade */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Nacionalidade</label>
            <input
              className='u-full-width'
              placeholder='Nacionalidade'
              type='text'
              // value={state.nacionalidade}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* Estado */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Estado de Residência</label>
            <input
              className='u-full-width'
              placeholder='Estado'
              type='text'
              // value={state.residenciaEstado}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* Cidade */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Cidade de Residência</label>
            <input
              className='u-full-width'
              placeholder='Cidade'
              type='text'
              // value={state.residencialCidade}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* Classe Profissional */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Classe Profissional</label>
            <input
              className='u-full-width'
              placeholder='Classe Profissional'
              type='text'
              // value={state.classeProfissional}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* Profissão */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Profissão</label>
            <input
              className='u-full-width'
              placeholder='Profissão'
              type='text'
              // value={state.profissao}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* Valor Patrimônio */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Valor do Patrimônio</label>
            <input
              className='u-full-width'
              placeholder='Valor do Patrimônio'
              type='number' // Use number input for numeric values
              // value={state.valorPatrimonio}  // Update with state variable
              required
            />
          </div>
        </div>

        {/* PEP e FATCA (Checkbox) */}
        <div className='row'>
          <div className='formulario_input'>
            <label>PEP (Pessoa Exposta Politicamente)</label>
            <input
              type='checkbox'
              // value={state.pep} // Update with state variable
              required
            />
          </div>

          <div className='formulario_input'>
            <label>FATCA (Foreign Account Tax Compliance Act)</label>
            <input
              type='checkbox'
              // value={state.fatca} // Update with state variable
              required
            />
          </div>
        </div>

        {/* Telefones Adicionais */}
        <div className='row'>
          <div className='formulario_input'>
            <label>Telefones Adicionais (separados por vírgula)</label>
            <input
              className='u-full-width'
              placeholder=''
              type='text'
              // value={state.telefonesAdicionais}  // Update with state variable
              required
            />
          </div>
        </div>
      </div>
    </div>  
  );
};

      export default StepTwo;
