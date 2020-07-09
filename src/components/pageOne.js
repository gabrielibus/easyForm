import React from "react"
const info = require("../models/model")
let mapArray = Object.entries(info.fields)

function pageOne() {
  return (
    <div className='AppWrapper'>
      <div className='headerWrapper'>
        <h2>{info.site.title}</h2>
        <p>{info.site.description}</p>
      </div>
      <div className='AppBodyWrapper'>
        {mapArray.map((field, idx) => (
          <div
            className={`fieldsWrapper`}
            id={`fieldsWrapper${idx + 1}`}
            key={idx}>
            <label htmlFor={`field${idx + 1}`}>{field[1].label}</label>
            {field[1].tag === "input" ? (
              <input
                className={`field${idx + 1}`}
                type={field[1].type}
                placeholder={`${field[1].placeholder}`}
              />
            ) : field[1].tag === "textarea" ? (
              <textarea
                className={`field${idx + 1}`}
                type={field[1].type}
                placeholder={`${field[1].placeholder}`}
              />
            ) : (
              <h3>{field[1].tag}</h3>
            )}
          </div>
        ))}
      </div>
      <div className='btnWrapper'>
        <button>{info.site.btnText}</button>
      </div>
    </div>
  )
}

export default pageOne
