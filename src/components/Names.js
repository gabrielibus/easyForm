import React from 'react'

function Names(props) {

    return (
        <div className={props.screen === 1 ? 'Names animated bounceInRight' : 'hidden'}>
            <label htmlFor="names">Nombres</label>
            <input id='input' type="text" placeholder='Juan' />
            <label htmlFor="lastNames">Apellidos</label>
            <input id='input' type="text" placeholder='Pérez' />
            <div className='btnDiv'>
                <button onClick={props.order}>next</button>
            </div>
        </div>
    )
}

export default Names