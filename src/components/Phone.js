import React from 'react'

function Phone(props) {

    return (
        <div className='Phone animated pulse'>
            <h2>Ya casi acabamos!</h2>
            <label
                htmlFor="phone1">Teléfono movil</label>
            <input
                id='focus'
                className='phone1'
                type="text"
                placeholder='300-5555555'
                onChange={(event) => props.onChange(event)} />
            <label htmlFor="phone2">Teléfono fijo</label>
            <input
                className='phone2'
                type="text"
                placeholder='7775555'
                onChange={(event) => props.onChange(event)} />
            <div className='button'>
                <button onClick={props.onClick}>Finalizar</button>
            </div>
        </div>
    )
}

export default Phone