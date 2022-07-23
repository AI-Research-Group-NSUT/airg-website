import React, { useEffect } from 'react'

export const Menu = ({ open }) => {
    return (
        <div className={`menu_btn ${open ? 'open' : ''}`} id='btn'>
            <div className={`menu_btn__burger`}></div>
        </div>
    )
}
