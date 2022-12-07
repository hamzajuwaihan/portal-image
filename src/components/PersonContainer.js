import React, { useState } from 'react'
import Person from './Person'

function PersonContainer(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return (
        <>
            <button id={props.personName} onClick={handleShow}></button>
            <Person status={show} text={props.text} handleShow={handleShow}/>
        </>
    )
}

export default PersonContainer