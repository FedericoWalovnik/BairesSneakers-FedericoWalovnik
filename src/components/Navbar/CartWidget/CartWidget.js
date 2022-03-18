import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.scss'

const Navbar = ({ cartItems }) => {

    return (
        <div className="CartWidget">
            <FontAwesomeIcon className="CartWidget__icon" icon={faBagShopping} tabIndex='0' />
            {cartItems > 0 &&
                <div className="CartWidget__counter-container">
                    <p className="CartWidget__counter-text" > {cartItems}</p>
                </div>
            }
        </div>

    )
}

export default Navbar;