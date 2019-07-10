import React from 'react'
import Option from './Option'

const Options=(props)=>(
      <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={props.handleRemove}>Remove All</button>
        </div>
        {props.options.length===0 && <p className="widget-paragraph">Please add an option to get started</p>}
        {props.options.length>0?props.options.map((item,index)=><Option key={index} option={item} serial={index+1} handleDeleteOption={props.handleDeleteOption}/>):undefined}
      </div>
    )


export default Options
  