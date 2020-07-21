import React from "react"
import "../styles/AppStyles.scss"
const info = require("../models/model")


function Button( { action }) {
    return (
        <div className='btnWrapper' onClick={ action }>
          <button className='sendBtn' >{info.site.btnText}</button>
        </div>
      )
}

export default Button