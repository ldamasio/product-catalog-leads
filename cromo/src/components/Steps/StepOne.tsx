import React, { useState, useEffect } from 'react'

let state = {
  firstName: '',
  lastName: ''
}
let firstNameIsInvalid = true

const setFirstName = s => {
  state.firstName = s
  firstNameIsInvalid = state.firstName.length === 0
}
const setLastName = s => state.lastName = s

export const StepOne = (props) => {

  const validateFirstName = (val) => {
    let prevFirstName = state.firstName
    setFirstName(val)
  }

  const validateLastName = (val) => {
    setLastName(val)
  }

  const Required = () =>
    firstNameIsInvalid ? <span style={{ fontSize: '1rem', color: 'red' }}>&nbsp;[ Required ]</span> : ''

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
              onChange={e => validateFirstName(e.target.value)}
              value={state.firstName}
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
              onChange={e => validateFirstName(e.target.value)}
              value={state.firstName}
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
