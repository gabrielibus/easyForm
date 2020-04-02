import React from 'react'

function Names(props) {

    return (
        <div className='Names animated bounceInRight'>
            <h2>Cuéntanos sobre ti</h2>
            <label htmlFor="names">Nombres</label>
            <input id='focus'
                className='name'
                type="text"
                placeholder='Juan'
                onChange={(event) => props.onChange(event)} />
            <label htmlFor="lastNames">Apellidos</label>
            <input
                className='lastName'
                type="text"
                placeholder='Pérez'
                onChange={(event) => props.onChange(event)} />
            <div className='btnDiv'>
                <button onClick={props.onClick}>siguiente</button>
            </div>
        </div>
    )
}

export default Names