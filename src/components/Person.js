import React from 'react'
import ReactDOM from 'react-dom'
import './Person.css'
function Person(props) {
    return ReactDOM.createPortal(
        <>
            
            <div id="myModal" className={props.status?"modal statusShow":"statusHide modal"} >

                <div className="modal-content">
                    <button className="close" onClick={props.handleShow}>&times;</button>
                    <p>{props.text}</p>
                </div>

            </div>
        </>,
        document.getElementById('modal')
    )
}

export default Person