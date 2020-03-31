import React from 'react'

function Address(props) {

    return (
        <div className={props.screen === 2 ? 'Address animated bounceInRight' : 'hidden'}>
            <label htmlFor="dir">Dirección</label>
            <input id='input' type="text" placeholder='Calle 01 sur #01-01'/>
            <label htmlFor="notesDir">notas adicionales</label>
            <textarea id='notesDiv'  placeholder='Urbanización la Campiña, Apartamento 401. Frente al Parque AguasClaras.' />
            <div className='button'>
            <button onClick={props.order}>next</button>
            </div>
        </div>
    )
}

export default Address