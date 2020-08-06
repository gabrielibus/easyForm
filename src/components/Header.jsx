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
            src={`https://res.cloudinary.com/cfacilito/image/upload/t_media_lib_thumb/v1596690501/indutramites/WhatsApp_Image_2020-07-10_at_9.49.30_AM_vwx720.jpg`}
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
