import React from 'react'

const Action=(props)=> (
        <div>
          <button className="big-button" disabled={!props.hasOptions} onClick={props.handleSelectedOption}>What should i do?</button>
        </div>
)

export default Action