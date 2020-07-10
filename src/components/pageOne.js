import React from "react"
const info = require("../models/model")

let mapArray = Object.entries(info.fields)

function pageOne() {
  let Forms = ({ form }) => {
    let res = form.map((field, idx) => (
      <div className={`fieldsWrapper`} id={`fieldsWrapper${idx + 1}`} key={idx}>
        <label htmlFor={`field${idx + 1}`}>{field.label}</label>
        {React.createElement(`${field.tag}`, {
          className: `field${idx + 1}`,
          type: field.type,
          placeholder: `${field.placeholder}`,
        })}
      </div>
    ))
    return res
  }

  return (
    <div className='AppWrapper'>
      <div className='headerWrapper'>
        <div className='headerImgContainer'>
          <img
            className='headerLogo'
            src={`https://instagram.feoh3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/81963219_2690324851212676_7117728190725881856_n.jpg?_nc_ht=instagram.feoh3-1.fna.fbcdn.net&_nc_ohc=YecDVffX8Z4AX_4oNR0&oh=4be269ae9369e08353c18f4edd78cc19&oe=5F303C69`}
          />
        </div>
        <h2 className='headerTitle'>{info.site.title}</h2>
      </div>
      <p className='headerText'>{info.site.description}</p>
      <div className='bodyWrapper'>
        {mapArray.map((form, idx) => (
          <div
            key={idx}
            className='formsWrapper'
            style={
              idx % 2 == 0
                ? { backgroundColor: "#ffffff" }
                : { backgroundColor: "#ffffff" }
            }>
            <div
              className='formsWrapperTitle'
              style={
                idx % 2 == 0
                  ? { backgroundColor: "#00b8d4" }
                  : { backgroundColor: "#8e0038", color: "white" }
              }>
              <h4 className='formsTitle'>Datos de {form[0]}</h4>
            </div>
            <Forms form={form[1]} />
          </div>
        ))}
      </div>
      <div className='termsWrapper'>
        <div className='terms1Wrapper'>
          <input type='checkbox' className='terms' />
          <label htmlFor='terms'>
            <a href='http://www.google.com'>Aceptar términos y condiciones</a>
          </label>
        </div>
        <div className='terms2Wrapper'>
          <input type='checkbox' className='terms' />
          <label htmlFor='terms'>
            <a href='http://www.google.com'>Aceptar manejo de datos</a>
          </label>
        </div>
      </div>
      <div className='btnWrapper'>
        <button>{info.site.btnText}</button>
      </div>
    </div>
  )
}

export default pageOne
