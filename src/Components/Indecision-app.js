import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

export default class Indecision extends React.Component{
    state={
        options:this.props.options,
        title:'Indecision',
        subtitle:'Put your life in the hands of a computer',
        selectedOption:undefined
    }
    handleDeleteOptions=()=>{
      this.setState(()=>({options:[]}))
     }
  
     handleDeleteOption=(option)=>{
      this.setState((prevState)=>{
        return{
          options:prevState.options.filter((item)=>item!==option)
        }
      })
     }
     handleAddOption=(option)=>{  
      if(!option){
        return 'Please provide some input before adding'
      }else if(this.state.options.indexOf(option)>-1){
        return 'This option already exists'
      }
      this.setState((prevState)=>({options:prevState.options.concat([option])}))   
     }
     handleSelectedOption=()=>{
      let x=Math.floor(Math.random()*this.state.options.length)
      let option=this.state.options[x]
      this.setState(()=>({
          selectedOption:option
      })
      )
    }
    handleDeselectOption=()=>{
      this.setState(()=>{
        return{
          selectedOption:undefined
        }
      })
    }
  
    componentDidMount(){
      try{
       const json=localStorage.getItem('options')
       const options= JSON.parse(json)
       if(options){
        this.setState(()=>({
          options
         }))
       }
        
      }catch(e){
      }
     }
 
    componentDidUpdate(prevProps,prevState){
     if(prevState.options.length!==this.state.options.length){
       const json=JSON.stringify(this.state.options)
       localStorage.setItem('options',json)
     }
    }

    componentWillUnmount(){
      console.log("componentWillUnmount")
    }
   
    render(){
       return(
         <div >
           <Header 
           title={this.state.title} 
           subtitle={this.state.subtitle}
           />
           <div className="container">
           <Action 
           hasOptions={this.state.options.length>0} 
           array={this.state.options}
           handleSelectedOption={this.handleSelectedOption}
           />
           <div className="widget">
           <Options 
           options={this.state.options} 
           handleRemove={this.handleDeleteOptions} 
           handleDeleteOption={this.handleDeleteOption}
           />
           <AddOption 
           handleAdd={this.handleAddOption}
           />
           </div>
           </div>
           <OptionModal
           handleSelectedOption={this.state.selectedOption}
           handleDeselectOption={this.handleDeselectOption}
           />
         </div>
       )
     }
 } 
 
 Indecision.defaultProps={
   options:[]
 }
 
