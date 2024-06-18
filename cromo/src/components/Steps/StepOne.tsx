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

      </div>
    </div>
  )
}

export default StepOne;
