import React from 'react'

function Names(props) {

    return (
        <div className={props.screen === 1 ? 'Names animated bounceInRight' : 'hidden'}>
            <label htmlFor="names">Nombres</label>
            <input id='input'className='name' type="text" placeholder='Juan' onChange={(event) => props.onChange(event)} />
            <label htmlFor="lastNames">Apellidos</label>
            <input id='input' className='lastName' type="text" placeholder='Pérez' onChange={(event) => props.onChange(event)} />
            <div className='btnDiv'>
                <button onClick={props.order}>next</button>
            </div>
        </div>
    )
}

export default Names