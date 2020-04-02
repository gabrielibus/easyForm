import React from 'react'

function Thanks(props) {

    return (
        <div className='Phone animated bounceInRight'>
            <h1>¡Gracias!</h1>
            <h2>Tu información ha sido <br/> enviada correctamente</h2>
            <button onClick={props.onClick}>Reiniciar</button>
        </div>
    )
}

export default Thanks