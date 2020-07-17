import React from "react"
import "../styles/AppStyles.scss"
const info = require("../models/model")


function Header() {
  return (
    <div>
      <div className='headerWrapper'>
        <div className='headerImgContainer'>
          <img
            className='headerLogo'
            src={`https://instagram.feoh3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/81963219_2690324851212676_7117728190725881856_n.jpg?_nc_ht=instagram.feoh3-1.fna.fbcdn.net&_nc_ohc=YecDVffX8Z4AX_4oNR0&oh=4be269ae9369e08353c18f4edd78cc19&oe=5F303C69`}
            alt={'logo'}
          />
        </div>
        <h2 className='headerTitle'>{info.site.title}</h2>
      </div>
      <p className='headerText'>{info.site.description}</p>
    </div>
  )
}

export default Header
