import React from "react"
const info = require("../models/model")

function Forms({ onchange }) {
  let infoFields = Object.entries(info.fields) // [["regogida", {...}], ...]

  let styles = {
    recogidafield1: {
      autofocus: "",
    },
    recogidafield3: {
      cols: "40",
      rows: "80",
      type: "date",
      autocomplete: "on",
    },
  }

  let VariableTag = ({props}) => {
    if (props.field.tag === "textarea") {
      return (
        <textarea
          className={`${props.form[0]}field${props.idx + 1}`}
          placeholder={`${props.field.placeholder}`}
          style={styles[`${props.form[0]}field${props.idx + 1}`]}
          onChange={(event) => onchange(event)}
        />
      )
    } else {
      return (
        <input
          className={`${props.form[0]}field${props.idx + 1}`}
          placeholder={`${props.field.placeholder}`}
          style={styles[`${props.form[0]}field${props.idx + 1}`]}
          onChange={(event) => onchange(event)}
        />
      )
    }
  }

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
                <VariableTag
                  props={{ idx, form, field }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forms
