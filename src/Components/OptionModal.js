import React from 'react'
import Modal from 'react-modal'

const OptionModal=(props)=>
    (
    <Modal
    isOpen={!!props.handleSelectedOption}
    onRequestClose={props.handleDeselectOption}
    contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    <p>{props.handleSelectedOption}</p>
    <button onClick={props.handleDeselectOption}>Okay</button>
    </Modal>
    )


export default OptionModal