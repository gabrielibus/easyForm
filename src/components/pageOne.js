import React from "react"
const info = require("../models/model")

let mapArray = Object.entries(info.fields)

function pageOne() {
  function Forms({ form }) {
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
        <h2 className='AppTitle'>{info.site.title}</h2>
        <p className='AppText'>{info.site.description}</p>
      </div>
      {mapArray.map((form, idx) => (
        <div key={idx} className='formsWrapper'>
          <h4 className='formsWrapperTitle'>Datos de {form[0]}</h4>
          <Forms form={form[1]} />
        </div>
      ))}
      <div className='btnWrapper'>
        <button>{info.site.btnText}</button>
      </div>
    </div>
  )
}

export default pageOne
