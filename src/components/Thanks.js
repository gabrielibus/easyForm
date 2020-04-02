import React from 'react'

function Thanks(props) {

    return (
        <div className='Phone animated pulse'>
            <h2>¡Gracias!</h2>
            <h3>Tu información ha sido enviada correctamente</h3>
            <button onClick={props.onClick}>Reiniciar</button>
        </div>
    )
}

export default Thanks