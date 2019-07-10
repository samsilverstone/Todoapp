import React from 'react'

export default class AddOption extends React.Component{
    state={
      error:undefined
    }
    Submit=(e)=>{
      e.preventDefault()
      const error=this.props.handleAdd(e.target.elements.option.value.trim())
      this.setState(()=>({error}))
      if(!error){
        e.target.elements.option.value=''
      }
    }
    render(){
      return(
        <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form onSubmit={this.Submit} className="add-option">
          <input className="add-option__input"type='text' name='option'/>
          <button className="button">Add Option</button>
        </form>
        </div>
      )
    }
  }