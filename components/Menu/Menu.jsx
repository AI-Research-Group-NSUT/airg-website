import React, { useEffect } from 'react'

import * as styles from './Menu.module.css'

export const Menu = ({ open }) => {

    useEffect(() => {

        const menu = document.getElementById(`btn`)

        if (open) {
            menu?.classList.add('open')
        } else {
            menu?.classList.remove('open')
        }


    }, [open])


    return (
        <div className={`menu_btn`} id='btn'>
            <div className={`menu_btn__burger`}></div>
        </div>
    )
}
