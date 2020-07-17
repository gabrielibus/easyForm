import React from "react"
import "../styles/AppStyles.scss"

function Terms() {
  return (
    <div className='termsWrapper'>
      <div className='terms1Wrapper'>
        <input type='checkbox' className='terms' />
        <label htmlFor='terms'>
          <a href='http://www.google.com'>Aceptar términos y condiciones</a>
        </label>
      </div>
      <div className='terms2Wrapper'>
        <input type='checkbox' className='terms' />
        <label htmlFor='terms'>
          <a href='http://www.google.com'>Aceptar manejo de datos</a>
        </label>
      </div>
    </div>
  )
}

export default Terms
