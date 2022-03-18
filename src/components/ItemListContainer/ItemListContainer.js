import React from 'react'
import './ItemListContainer.scss'

const Navbar = ({ title }) => {

    return (
        <div className="ItemListContainer">
            <h2>{title}</h2>
        </div>
    )
}

export default Navbar;