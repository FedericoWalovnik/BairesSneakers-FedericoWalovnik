import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './Navbar.scss';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1 tabIndex='0'><Link to={'/'}>Baires Sneakers</Link></h1>
            </div>
            <ul className="navbar__categories">
                <li className="navbar__category" tabIndex='0'>
                    <p>New entries</p>
                </li>
                <li className="navbar__category" tabIndex='0'>
                    <p>Man</p>
                </li>
                <li className="navbar__category" tabIndex='0'>
                    <p>Women</p>
                </li>
                <li className="navbar__category" tabIndex='0'>
                    <p>Kids</p>
                </li>
                <li className="navbar__category" tabIndex='0'>
                    <p>Sale</p>
                </li>
            </ul>
            <div className="navbar__actions">
                <TextField
                    variant="outlined"
                    size="small"
                    id="input-with-icon-adornment"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </InputAdornment>
                        ),
                    }}
                />
                <div className="navbar__icon" tabIndex="0">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="navbar__icon" tabIndex="0">
                    <CartWidget cartItems={1} />
                </div>
            </div >
        </nav >
    )
}

export default Navbar;