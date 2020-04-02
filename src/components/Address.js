import React from 'react'

function Address(props) {
    return (
        <div className='Address animated bounceInRight' >
            <h2>Necesitamos algunos datos más</h2>
            <label htmlFor="dir">Dirección</label>
            <input
                id='focus'
                className='address'
                type="text"
                placeholder='Calle 01 sur #01-01'
                onChange={(event) => props.onChange(event)}
            />
            <label htmlFor="notesDir">notas adicionales</label>
            <textarea
                id='notesDiv'
                className='notes'
                placeholder='Urbanización la Campiña, Apartamento 401. Frente al Parque AguasClaras.' onChange={(event) => props.onChange(event)}
            />
            <div className='button'>
                <button onClick={props.onClick}>siguiente</button>
            </div>
        </div>
    )
}

export default Address