import React from "react"
import "../styles/AppStyles.scss"
const info = require("../models/model")


function Button( { onclick }) {
    return (
        <div className='btnWrapper'>
          <button onClick={() => onclick}>{info.site.btnText}</button>
        </div>
      )
}

export default Button