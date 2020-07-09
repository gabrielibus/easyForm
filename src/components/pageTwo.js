import React from 'react'

function pageTwo(props) {
    return (
        <div className='Address animated pulse' >
            <h2>Datos de la SEGUNDA parada</h2>
            <label htmlFor="dir">Nombres y apellidos</label>
            <input
                id='focus'
                className='names3'
                type="text"
                placeholder='Marta Pérez'
                onChange={(event) => props.onChange(event)}
            />
            <label htmlFor='senderAddress'>Dirección de la SEGUNDA parada</label>
      <input
        className='address2'
        type='text'
        placeholder='Av bolivariana #65-27 piso 4'
        onChange={(event) => props.onChange(event)}
      />
      <label
                htmlFor="phone1">Teléfonos de la SEGUNDA parada</label>
            <input
                id='focus'
                className='phone1'
                type="text"
                placeholder='3005555555, 3435555'
                onChange={(event) => props.onChange(event)} />
            <label htmlFor="notesDir">¿Qué debemos hacer en la SEGUNDA parada?</label>
            <textarea
                id='notesDiv'
                className='notes2'
                placeholder='Entregar la encomienda y recibir el pago del servicio' onChange={(event) => props.onChange(event)}
            />
            <div className='button'>
                <button onClick={props.onClick}>siguiente</button>
            </div>
        </div>
    )
}

export default pageTwo