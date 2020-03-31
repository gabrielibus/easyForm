import React from 'react'

function Phone(props) {

    return (
        <div className={props.screen === 3 ? 'Phone animated bounceInRight' : 'hidden'}>
            <label htmlFor="phone1">Teléfono movil</label>
            <input ide='phone1' type="text" placeholder='300-5555555' />
            <label htmlFor="phone2">Teléfono fijo</label>
            <input ide='phone2' type="text" placeholder='7775555' />
            <div className='button'>
            <button onClick={props.order}>next</button>
            </div>
        </div>
    )
}

export default Phone