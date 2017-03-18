import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'

let overlay = null

const close = e => {
    ReactDOM.unmountComponentAtNode(overlay)
    overlay.remove()
    overlay = null
}

const dialog = data => {
    overlay = document.createElement('div')
    document.body.appendChild(overlay)

    ReactDOM.render(
        <Modal data={data} close={close} />,
        overlay
    )
}

export default dialog