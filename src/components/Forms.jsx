import React from "react"
const info = require("../models/model")

function Forms({ onchange }) {
  let infoFields = Object.entries(info.fields) // [["regogida", {...}], ...]

  return (
    <div className='AppWrapper'>
      <div className='bodyWrapper'>
        {infoFields.map((form, idx) => (
          <div key={idx} className='formsWrapper'>
            <div
              className='formsWrapperTitle'
              style={
                idx % 2 === 0
                  ? { backgroundColor: "#00b8f4" }
                  : { backgroundColor: "#8e0038", color: "white" }
              }>
              <h4 className='formsTitle'>Datos de {form[0]}</h4>
            </div>
            {form[1].map((field, idx) => (
              <div
                className={`fieldsWrapper`}
                id={`fieldsWrapper${idx + 1}`}
                key={idx}>
                <label htmlFor={`field${idx + 1}`}>{field.label}</label>
                <textarea
                  className={`${form[0]}field${idx + 1}`}
                  placeholder={`${field.placeholder}`}
                  onChange={(event) => onchange(event)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forms

/* {Esta línea crea lementos de React sin JSX} */
/* {React.createElement(`${field.tag}`, {className: `field${idx + 1}`,type: field.type,placeholder: `${field.placeholder}`,})} */
