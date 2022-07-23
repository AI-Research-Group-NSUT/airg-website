import React, { useEffect, useState } from 'react'

export const Spacer = () => {


    // get element by id 'navbar' and make a state height with it   
    const [navbarHeight, setNavbarHeight] = useState(100);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        setNavbarHeight(navbar.offsetHeight);

        // add event listener for resize and reset navbar height
        window.addEventListener('resize', () => {
            setNavbarHeight(navbar.offsetHeight);
        })

        return () => {
            window.removeEventListener('resize', () => {
                setNavbarHeight(navbar.offsetHeight);
            })
        }
    }, []);

    return (

        <div style={{ height: `${navbarHeight}px`, width: '100vw' }}>

        </div>
    )
}
