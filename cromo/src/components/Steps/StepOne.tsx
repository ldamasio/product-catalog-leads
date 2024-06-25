import React from 'react'

const StepOne: React.FC = () => {

  return (
    <div className='formulario'>
      <h1>Passo 1: Seu Perfil</h1>
      <div className='container u-full-width'>
        <div className='row'>
          <div className='formulario_input'>
            <label>Nome Completo</label>
            <input
              className='u-full-width'
              placeholder='Nome Completo'
              type='text'
              // value={state.firstName}
              autoFocus
              required
            />
          </div>
        </div>

        <div className='row'>
          <div className='formulario_input'>
            <label>Email</label>
            <input
              className='u-full-width'
              placeholder='Email'
              type='text'
              // value={state.firstName}
              autoFocus
              required
            />
          </div>
        </div>


        <div className='container u-full-width'>
          {/* Estado Civil */}
          <div className='row'>
            <div className='formulario_input'>
              <label>Estado Civil</label>
              <select
                className='u-full-width'
                // value={state.estadoCivil}  // Update with state variable
                required
              >
                <option value='solteiro'>Solteiro</option>
                <option value='casado'>Casado</option>
                <option value='divorciado'>Divorciado</option>
                <option value='viuvo'>Viúvo</option>
                <option value='separado'>Separado</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          {/* RG */}
          <div className='row'>
            <div className='six columns formulario_input'>
              <label>RG</label>
              <input
                className='u-full-width'
                placeholder='RG'
                type='text'
                // value={state.rgNumero}  // Update with state variable
                required
              />
            </div>
            <div className='six columns formulario_input'>
              <label>Orgão Expedidor</label>
              <input
                className='u-full-width'
                placeholder='SSP (ou outro órgão)'
                type='text'
                // value={state.rgOrgexp}  // Update with state variable
                required
              />
            </div>
          </div>

          {/* Data de Nascimento */}
          <div className='row'>
            <div className='six columns formulario_input'>
              <label>Data de Nascimento</label>
              <input
                className='u-full-width'
                placeholder='dd/mm/aaaa'
                type='date'  // Use date input for better user experience
                // value={state.dataNasc}  // Update with state variable
                required
              />
            </div>
          </div>

          {/* CPF */}
          <div className='row'>
            <div className='six columns formulario_input'>
              <label>CPF</label>
              <input
                className='u-full-width'
                placeholder='123.456.789-00'
                type='text'
                // value={state.cpf}  // Update with state variable
                required
              />
            </div>
          </div>

          {/* Celular */}
          <div className='row'>
            <div className='six columns formulario_input'>
              <label>Celular</label>
              <input
                className='u-full-width'
                placeholder='(11) 91234-5678'
                type='tel'  // Use tel input for phone number formatting
                // value={state.celular}  // Update with state variable
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
