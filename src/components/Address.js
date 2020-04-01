import React, { useEffect } from 'react'

function Address(props) {

useEffect(() => document.getElementById('address').focus() ,[])

    return (
        <div className={props.screen === 2 ? 'Address animated bounceInRight' : 'hidden'}>
            <label htmlFor="dir">Dirección</label>
            <input
                id='address'
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
                <button onClick={props.order}>next</button>
            </div>
        </div>
    )
}

export default Address